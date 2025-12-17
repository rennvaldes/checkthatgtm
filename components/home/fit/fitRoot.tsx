"use client";

import { useState, useEffect } from "react";
import { cx } from "@/lib/classnames";
import { Data } from "@/lib/data";
import { IconCheck } from "@/components/home/assets/assetsIcons";
import { SectionHeader } from "@/components/home/sectionHeader";
import { Button } from "@/components/home/button";

export function FitRoot() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with item 2 (index 1) which has description
  const content = Data.fit();

  // Auto-cycle through items every 3 seconds (desktop only)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const setupInterval = () => {
      if (mediaQuery.matches) {
        return setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % content.items.length);
        }, 3000);
      }
      return null;
    };

    let interval = setupInterval();

    const handleChange = () => {
      if (interval) clearInterval(interval);
      interval = setupInterval();
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      if (interval) clearInterval(interval);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [content.items.length]);

  return (
    <section className="pt-20 md:pt-32 lg:pt-44 border-t-[0.5px] border-border overflow-x-clip">
      <SectionHeader
        label={content.label}
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Desktop Cycler */}
      <div className="hidden md:block mt-10 mx-auto w-[calc(100%-48px)] max-w-[1280px]">
        <div className="grid grid-cols-12 relative border-l-[0.5px] border-r-[0.5px] border-border before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.5px] before:bg-border">
          {/* Checkmarks Column */}
          <div className="col-span-1 flex flex-col">
            {content.items.map((_, idx) => (
              <div
                key={idx}
                className={cx(
                  "flex items-center justify-center h-[40px] border-r-[0.5px] border-border cursor-pointer transition-colors",
                  idx !== content.items.length - 1 &&
                    "border-b-[0.5px] border-border",
                  activeIndex === idx ? "bg-foreground" : "bg-background"
                )}
                onClick={() => setActiveIndex(idx)}
              >
                <div
                  className={cx("w-4 h-4", activeIndex === idx ? "invert" : "")}
                >
                  <IconCheck />
                </div>
              </div>
            ))}
          </div>

          {/* Text Column */}
          <div className="col-span-6 flex flex-col">
            {content.items.map((item, idx) => (
              <div
                key={idx}
                className={cx(
                  "flex items-center px-[10px] h-[40px] border-r-[0.5px] border-border cursor-pointer transition-colors",
                  idx !== content.items.length - 1 &&
                    "border-b-[0.5px] border-border",
                  activeIndex === idx
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                onClick={() => setActiveIndex(idx)}
              >
                <span className="text-lg leading-[1.5] tracking-[-0.04em]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Description Column */}
          <div className="col-span-5 flex items-center px-10">
            <p className="text-lg leading-[1.5] tracking-[-0.04em] text-foreground">
              {content.items[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-5 lg:px-10 flex items-center justify-between py-10 border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-border">
          <p className="text-lg leading-[1.5] tracking-[-0.04em] text-foreground max-w-[600px]">
            {content.footer.text}
          </p>
          <Button href={content.footer.cta.url}>
            {content.footer.cta.text}
          </Button>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden mt-10 mx-auto w-[calc(100%-48px)] max-w-[1280px]">
        <div className="flex flex-col">
          {content.items.map((item, idx) => (
            <div key={idx} className="border-b-[0.5px] border-border">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                className="w-full flex items-center gap-3 py-4 text-left"
              >
                <IconCheck />
                <span className="flex-1 text-base">{item.title}</span>
                <span className="text-lg leading-[1.5] tracking-[-0.04em]">
                  {activeIndex === idx ? "−" : "+"}
                </span>
              </button>
              {activeIndex === idx && (
                <div className="pb-4 px-8">
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 hidden flex-col gap-6 py-10 border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-border">
          <p className="text-lg leading-[1.5] tracking-[-0.04em] text-foreground">
            {content.footer.text}
          </p>
          <Button href={content.footer.cta.url} fullWidth>
            {content.footer.cta.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
