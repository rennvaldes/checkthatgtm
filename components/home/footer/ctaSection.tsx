"use client";

import { GridRoot } from "@/components/home/grid/gridRoot";
import { Button } from "@/components/home/button";
import { RadarGrid } from "./radarGrid";

type CtaSectionProps = {
  variant?: "default" | "careers";
};

const content = {
  default: {
    label: "AI Visibility Index",
    title: "Get access to the Open AI Visibility Index.",
    description:
      "Create a free account to track your brand and get the 5-day action plan.",
    buttonText: "Get started",
    buttonHref: "https://checkthat.ai",
  },
  careers: {
    label: "AI Visibility Index",
    title: "Build the future of AI-Led Growth",
    description:
      "We're looking for talented people who want to shape how companies grow with AI. Join our fully remote team.",
    buttonText: "View open roles",
    buttonHref: "/careers",
  },
};

export function CtaSection({ variant = "default" }: CtaSectionProps) {
  const { label, title, description, buttonText, buttonHref } = content[variant];

  return (
    <section className="pt-[456px] desktop:pt-[576px] pb-20 desktop:pb-44 relative overflow-visible">
      {/* Radar background - positioned to extend behind footer */}
      <div className="absolute inset-0 overflow-visible pointer-events-none" style={{ top: 'calc(-40% + 200px)', bottom: '-40%' }}>
        <RadarGrid />
      </div>
      
      {/* White gradient fade underneath AI Visibility Index content */}
      <div className="absolute top-0 left-0 right-0 h-[768px] bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none z-[5]" />
      
      <GridRoot size="normal" className="relative z-10 -mt-[280px] desktop:-mt-[400px]">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            {label}
          </span>

          {/* Content */}
          <div>
            <h2 className="text-[20px] desktop:text-2xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em]">
              {title}
            </h2>
            <p className="text-[20px] desktop:text-2xl font-400 leading-normal desktop:leading-tight tracking-[-0.06em] text-muted-foreground">
              {description}
            </p>

            <div className="mt-8 sticky top-[12px] tablet:top-[14px] z-40 w-fit">
              <Button href={buttonHref} variant="primary">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
