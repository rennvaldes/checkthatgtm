"use client";

import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { cx } from "@/lib/classnames";
import { Data } from "@/lib/data";
import { IconCheck, IconCross } from "@/components/home/assets/assetsIcons";
import { SectionHeader } from "@/components/home/sectionHeader";
import { Button } from "@/components/home/button";

interface TabButtonProps {
  column: string;
  idx: number;
  activeTab: number;
  onClick: () => void;
  tabRef: (el: HTMLButtonElement | null) => void;
}

function TabButton({
  column,
  idx,
  activeTab,
  onClick,
  tabRef,
}: TabButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const textSpring = useSpring({
    progress: activeTab === idx || isHovered ? 1 : 0,
    config: { tension: 300, friction: 35 },
  });

  return (
    <animated.button
      ref={tabRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center py-5 text-base font-normal"
      style={{
        color: textSpring.progress.to(
          [0, 1],
          ["rgb(113, 113, 122)", "rgb(9, 9, 11)"]
        ),
      }}
    >
      {column}
    </animated.button>
  );
}

export function ComparisonRoot() {
  const [activeTab, setActiveTab] = useState(0);
  const content = Data.comparison();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [tabMetrics, setTabMetrics] = useState({ width: 0, x: 0 });

  useEffect(() => {
    const activeTabEl = tabRefs.current[activeTab];
    if (activeTabEl) {
      setTabMetrics({
        width: activeTabEl.offsetWidth,
        x: activeTabEl.offsetLeft,
      });
    }
  }, [activeTab]);

  const indicatorSpring = useSpring({
    transform: `translateX(${tabMetrics.x}px) translateY(1px)`,
    width: tabMetrics.width,
    config: { tension: 300, friction: 35 },
  });

  return (
    <section className="pt-20 md:pt-32 lg:pt-44 border-t-[0.5px] border-border overflow-x-clip">
      <SectionHeader
        label={content.label}
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Desktop Table */}
      <div className="hidden md:block mt-10 mx-auto w-[calc(100%-40px)] max-w-[1280px]">
        <div className="grid grid-cols-4 gap-0 relative pt-6 pb-6 border-l-[0.5px] border-r-[0.5px] border-border before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.5px] before:bg-border before:pointer-events-none before:z-20">
          {/* Sticky Header */}
          <div className="sticky top-0 grid grid-cols-4 col-span-4 bg-background z-10 relative">
            {/* Empty first column */}
            <div className="border-b-[0.5px] border-border" />

            {/* Column Headers */}
            {content.columns.map((column, idx) => (
              <div
                key={column}
                className={cx(
                  "flex flex-col items-center justify-end h-[159px] pt-10 pb-10 border-b-[0.5px] border-border relative",
                  idx === content.bestChoiceColumn && "bg-pink"
                )}
              >
                {idx === content.bestChoiceColumn && (
                  <div className="absolute top-8 right-5 px-3 py-1 border border-[#B58B9A] text-[#B58B9A] rounded-full text-xs">
                    Best Choice
                  </div>
                )}
                <span className="text-lg leading-[1.5] tracking-[-0.04em]">
                  {column}
                </span>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {content.features.map((feature, featureIdx) => (
            <div key={feature} className="grid grid-cols-4 col-span-4">
              {/* Feature Label */}
              <div className="flex items-center px-5 py-4 border-b-[0.5px] border-border">
                <span className="text-sm">{feature}</span>
              </div>

              {/* Availability Cells */}
              {content.availability[featureIdx].map((available, colIdx) => (
                <div
                  key={colIdx}
                  className={cx(
                    "flex items-center justify-center py-4 border-b-[0.5px] border-border",
                    colIdx === content.bestChoiceColumn && "bg-pink"
                  )}
                >
                  {available ? <IconCheck /> : <IconCross />}
                </div>
              ))}
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-4 col-span-4">
            <div className="col-span-1" />
            <div className="flex items-center justify-center py-10 bg-pink">
              <Button href={content.cta.url} className="text-pink">
                {content.cta.text}
              </Button>
            </div>
            <div className="col-span-2" />
          </div>
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="md:hidden mt-10 mx-auto w-[calc(100%-40px)] max-w-[1280px]">
        {/* Tab Navigation */}
        <div className="flex gap-6 h-16 mb-6 relative after:absolute after:bottom-0 after:inset-x-[calc(-50vw+50%)] after:h-[0.5px] after:bg-border">
          {content.columns.map((column, idx) => (
            <TabButton
              key={column}
              column={column}
              idx={idx}
              activeTab={activeTab}
              onClick={() => setActiveTab(idx)}
              tabRef={(el) => {
                tabRefs.current[idx] = el;
              }}
            />
          ))}
          <animated.div
            className="absolute bottom-0 left-0 h-[2px] bg-foreground"
            style={indicatorSpring}
          />
        </div>

        {/* Feature List */}
        <div className="flex flex-col">
          {content.features.map((feature, featureIdx) => (
            <div
              key={feature}
              className={cx(
                "flex items-center gap-4 py-4 relative after:absolute after:bottom-0 after:inset-x-[calc(-50vw+50%)] after:h-[0.5px]",
                activeTab === content.bestChoiceColumn
                  ? "after:bg-foreground/40 before:absolute before:inset-y-0 before:inset-x-[calc(-50vw+50%)] before:bg-pink before:-z-10"
                  : "after:bg-border"
              )}
            >
              {/* Icons for all columns */}
              <div className="flex gap-3">
                {content.availability[featureIdx].map((available, colIdx) => (
                  <div
                    key={colIdx}
                    className={cx(
                      "flex-shrink-0 transition-opacity duration-300",
                      colIdx !== activeTab && "opacity-30"
                    )}
                  >
                    {available ? <IconCheck /> : <IconCross />}
                  </div>
                ))}
              </div>

              {/* Feature Label */}
              <span className="text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
