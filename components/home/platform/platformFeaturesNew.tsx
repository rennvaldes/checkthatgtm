"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { Data } from "@/lib/data";

export function PlatformFeaturesNew() {
  const content = Data.platformFeatures();
  const [visibleDays, setVisibleDays] = useState<Set<number>>(new Set([0])); // Day 1 visible by default
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    dayRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleDays((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2, rootMargin: "-50px" }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="pt-20 tablet:pt-32 desktop:pt-44" data-section="launch-week">
      {/* Section Header */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-normal mb-3 desktop:mb-0">
            {content.sectionLabel}
          </span>
          <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-10 after:w-screen after:h-[0.5px] after:bg-border">
            <h2 className="text-[20px] desktop:text-2xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em]">
              {content.heading}
            </h2>
            <p
              className="text-[20px] desktop:text-2xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em]"
              style={{ color: "#0ABF53" }}
            >
              {content.subheading}
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Day 1 - Full platform access with image on left */}
      <GridRoot size="normal" className="mt-10">
        <div 
          ref={(el) => { dayRefs.current[0] = el; }}
          className="border-t border-l border-r border-border overflow-hidden transition-all duration-700 ease-out"
          style={{
            opacity: visibleDays.has(0) ? 1 : 0,
            transform: visibleDays.has(0) ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <div className="flex flex-col desktop:flex-row">
            {/* Image - left side */}
            <div className="flex-1 bg-[#0ABF53] p-5 desktop:p-10 flex items-center justify-center relative desktop:border-r border-border">
            <div className="relative w-full max-w-[582px] aspect-[582/404] rounded-[4px] shadow-[0px_20px_30px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <Image
                src="/images/platform-screenshot.jpg"
                alt="CheckThat Platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_-200px_0px_120px_-120px_#189a4c]" />
          </div>

          {/* Content - right side */}
          <div className="flex-1 p-10 desktop:p-10 flex flex-col justify-center">
            <div className="bg-[#F1EEE9] inline-flex items-center gap-[6px] px-3 py-1.5 rounded-full mb-6 w-fit">
              <div className="relative flex items-center justify-center w-[7px] h-[7px]">
                <div className="absolute w-[7px] h-[7px] rounded-full bg-[#0ABF53] animate-ping opacity-75" />
                <div className="relative w-[7px] h-[7px] rounded-full bg-[#0ABF53]" />
              </div>
              <span className="text-[11px] font-bold text-black">Day 1: Live Now</span>
            </div>

            <h3 className="text-[28px] font-bold leading-[1.5] tracking-[-0.84px] mb-2">
              Full access to the platform
            </h3>

            <p className="text-[18px] font-[500] leading-[1.5] tracking-[-0.54px] text-muted-foreground mb-6">
              This is what you're agreeing to.<br />
              This is what we're building together.
            </p>

            <div className="space-y-0">
              {[
                "Immediate access to the CheckThat platform",
                "See data across 100,000+ of the most important industry prompts",
                "Track up to 50 custom prompts for your brand",
                "See which brands AI already favors in your category",
              ].map((item, i) => (
                <div key={i} className={`flex items-center h-12 ${i === 3 ? 'border-t border-b border-border' : 'border-t border-border'}`}>
                  <div className="flex items-start px-5 h-full">
                    <div className="flex items-center justify-center h-full">
                      <svg className="w-3 h-2 rotate-180 scale-y-[-1]" viewBox="0 0 13 9" fill="none">
                        <path d="M12.4703 3.53033L8.00033 8.00033L0.53033 0.53033" stroke="#080A0D" strokeWidth="1.5" strokeLinejoin="bevel" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[14px] font-[500] leading-[1.5] tracking-[-0.42px] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a href="https://checkthat.ai" className="mt-6 bg-[#080a0d] text-[#f1eee9] px-4 py-1 rounded-full text-[14px] font-bold inline-flex items-center gap-2 h-9 w-fit">
              Get Started
              <span className="font-bold">→</span>
            </a>
          </div>
        </div>
        </div>
      </GridRoot>

      {/* Days 2-5 - Text only format */}
      {content.features.slice(1).map((feature: any, index: number) => {
        const isLast = index === content.features.slice(1).length - 1;
        const dayIndex = index + 1; // Day 1 is 0, so Day 2 is 1, etc.
        return (
        <GridRoot key={feature.id} size="normal" className="mt-0">
          <div 
            ref={(el) => { dayRefs.current[dayIndex] = el; }}
            className={`border-l border-r border-t border-border overflow-hidden transition-all duration-700 ease-out ${isLast ? 'border-b' : ''}`}
            style={{
              opacity: visibleDays.has(dayIndex) ? 1 : 0,
              transform: visibleDays.has(dayIndex) ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
          <div className="flex flex-col desktop:flex-row">
            {/* Content - Full width */}
            <div className="flex-1 p-10 desktop:p-10 flex flex-col justify-center desktop:max-w-[50%]">
              <div className="bg-[#F1EEE9] inline-flex items-center gap-[6px] px-3 py-1.5 rounded-full mb-6 w-fit">
                <div className="w-[7px] h-[7px] rounded-full bg-[#FF9D00]" />
                <span className="text-[11px] font-bold text-black">
                  Day {index + 2}: {index === 0 ? "Research Drop" : index === 1 ? "Custom Audit" : index === 2 ? "Workshop" : "Preview"}
                </span>
              </div>

              <h3 className="text-[18px] font-bold leading-[1.5] tracking-[-0.54px] mb-2">
                {feature.title.replace(/^Day \d+: /, "")}
              </h3>

              <p className="text-[18px] font-[500] leading-[1.5] tracking-[-0.54px] text-muted-foreground">
                {feature.description}
              </p>
            </div>

            {/* Right side - Checklist */}
            <div className="flex-1 p-10 desktop:p-10 flex items-center justify-center desktop:border-l border-border">
              <div className="space-y-0 w-full">
                {feature.visual.items.slice(0, 3).map((item: any, i: number) => {
                  const text = typeof item === "string" ? item : `${item.metric || item.label}`;
                  return (
                    <div key={i} className={`flex items-center h-12 ${i === 0 ? 'border-t desktop:border-t-0 border-border' : 'border-t border-border'}`}>
                      <div className="flex items-start px-5 h-full">
                        <div className="flex items-center justify-center h-full">
                          <svg className="w-3 h-2 rotate-180 scale-y-[-1]" viewBox="0 0 13 9" fill="none">
                            <path d="M12.4703 3.53033L8.00033 8.00033L0.53033 0.53033" stroke="#080A0D" strokeWidth="1.5" strokeLinejoin="bevel" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-[14px] font-[500] leading-[1.5] tracking-[-0.42px] text-black">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </GridRoot>
      )}
      )}
    </section>
  );
}

