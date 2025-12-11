"use client";

import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { cx } from "@/lib/classnames";
import { Data } from "@/lib/data";
import { IconCheck } from "@/components/home/assets/assetsIcons";
import { SectionHeader } from "@/components/home/sectionHeader";
import { Button } from "@/components/home/button";

interface PlanTabButtonProps {
  planName: string;
  idx: number;
  activeTab: number;
  onClick: () => void;
  tabRef: (el: HTMLButtonElement | null) => void;
}

function PlanTabButton({
  planName,
  idx,
  activeTab,
  onClick,
  tabRef,
}: PlanTabButtonProps) {
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
      className="flex items-center py-5 text-lg font-normal whitespace-nowrap flex-shrink-0"
      style={{
        color: textSpring.progress.to(
          [0, 1],
          ["rgb(113, 113, 122)", "rgb(9, 9, 11)"]
        ),
      }}
    >
      {planName}
    </animated.button>
  );
}

export function PricingRoot() {
  const [activeTab, setActiveTab] = useState(0); // Start with "Most Popular" plan
  const content = Data.pricing();
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
    <section className="pt-[176px] border-t-[0.5px] border-border overflow-x-clip">
      <SectionHeader
        label={content.label}
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Desktop Table */}
      <div className="hidden md:block mt-10 mx-auto w-[calc(100%-40px)] max-w-[1280px]">
        <div
          className="grid grid-cols-2 gap-0 relative pt-6 pb-6 px-6 border-l-[0.5px] border-r-[0.5px] border-border before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.5px] before:bg-border after:absolute after:inset-x-[calc(-50vw+50%)] after:bottom-0 after:h-[0.5px] after:bg-border"
          style={{ gridAutoRows: "auto" }}
        >
          {/* Headers Row - will all match height */}
          {content.plans.map((plan) => (
            <div
              key={`${plan.name}-header`}
              className={cx(
                "px-10 pt-8 pb-16 flex flex-col relative",
                plan.highlight && "bg-yellow"
              )}
            >
              {/* Category */}
              <span
                className={cx(
                  "text-sm mb-2",
                  plan.highlight
                    ? "text-foreground/40"
                    : "text-muted-foreground"
                )}
              >
                {plan.category}
              </span>

              {/* Most Popular Badge */}
              {plan.mostPopular && (
                <div
                  className={cx(
                    "absolute top-8 right-5 px-3 py-1 border rounded-full text-xs",
                    plan.highlight
                      ? "border-foreground/40 text-foreground/40"
                      : "border-muted-foreground text-muted-foreground"
                  )}
                >
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg leading-[1.5] tracking-[-0.04em] font-medium mb-0 mt-16">
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={cx(
                  "text-lg mb-6",
                  plan.highlight
                    ? "text-foreground/40"
                    : "text-muted-foreground"
                )}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-2xl leading-[1.5] tracking-[-0.04em] font-[520]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={cx(
                      "text-lg",
                      plan.highlight
                        ? "text-foreground/40"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Feature Rows */}
          {content.plans[0].features.map((_, featureIdx) =>
            content.plans.map((plan) => (
              <div
                key={`${plan.name}-feature-${featureIdx}`}
                className={cx(
                  "flex items-center gap-5 pl-6 pr-10 h-[48px] border-b-[0.5px]",
                  featureIdx === 0 && "border-t-[0.5px]",
                  plan.highlight 
                    ? "bg-yellow border-foreground/40" 
                    : "border-border"
                )}
              >
                <IconCheck />
                <span className="text-sm">{plan.features[featureIdx]}</span>
              </div>
            ))
          )}

          {/* CTA Row */}
          {content.plans.map((plan) => (
            <div
              key={`${plan.name}-cta`}
              className={cx(
                "flex items-center justify-center py-10",
                plan.highlight && "bg-yellow"
              )}
            >
              <Button
                href={plan.cta.url}
                variant={plan.cta.variant as "primary" | "secondary"}
                className={plan.highlight ? "text-[#FFE57B]" : ""}
              >
                {plan.cta.text}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="md:hidden mt-10 mx-auto w-[calc(100%-40px)] max-w-[1280px]">
        {/* Tab Navigation */}
        <div className="flex gap-4 overflow-x-auto h-16 mb-4 relative after:absolute after:bottom-0 after:inset-x-[calc(-50vw+50%)] after:h-[0.5px] after:bg-border">
          {content.plans.map((plan, idx) => (
            <PlanTabButton
              key={plan.name}
              planName={plan.name}
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

        {/* Active Plan Card */}
        {content.plans.map(
          (plan, idx) =>
            activeTab === idx && (
              <div key={plan.name} className="flex flex-col">
                {/* Header */}
                <div
                  className={cx(
                    "pt-6 pb-12 flex flex-col relative",
                    plan.highlight &&
                      "before:absolute before:inset-y-0 before:inset-x-[calc(-50vw+50%)] before:bg-yellow before:-z-10"
                  )}
                >
                  {/* Category */}
                  <span
                    className={cx(
                      "text-sm mb-2",
                      plan.highlight
                        ? "text-foreground/40"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.category}
                  </span>

                  {/* Most Popular Badge */}
                  {plan.mostPopular && (
                    <div
                      className={cx(
                        "absolute top-6 right-0 px-3 py-1 border rounded-full text-xs",
                        plan.highlight
                          ? "border-foreground/40 text-foreground/40"
                          : "border-muted-foreground text-muted-foreground"
                      )}
                    >
                      Most Popular
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-lg leading-[1.5] tracking-[-0.04em] font-medium mb-0 mt-8">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={cx(
                      "text-lg mb-6",
                      plan.highlight
                        ? "text-foreground/40"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium">{plan.price}</span>
                    {plan.period && (
                      <span
                        className={cx(
                          "text-sm",
                          plan.highlight
                            ? "text-foreground/40"
                            : "text-muted-foreground"
                        )}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                {plan.features.map((feature, featureIdx) => (
                  <div
                    key={featureIdx}
                    className={cx(
                      "flex items-center gap-4 py-4 relative after:absolute after:bottom-0 after:inset-x-[calc(-50vw+50%)] after:h-[0.5px]",
                      plan.highlight
                        ? "after:bg-foreground/40 before:absolute before:inset-y-0 before:inset-x-[calc(-50vw+50%)] before:bg-yellow before:-z-10"
                        : "after:bg-border"
                    )}
                  >
                    <IconCheck />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}

                {/* CTA */}
                <div
                  className={cx(
                    "flex items-center justify-center py-8 relative",
                    plan.highlight &&
                      "before:absolute before:inset-y-0 before:inset-x-[calc(-50vw+50%)] before:bg-yellow before:-z-10"
                  )}
                >
                  <Button
                    href={plan.cta.url}
                    variant={plan.cta.variant as "primary" | "secondary"}
                    fullWidth
                    className={plan.highlight ? "text-[#FFE57B]" : ""}
                  >
                    {plan.cta.text}
                  </Button>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
