"use client";

import { GridRoot } from "@/components/home/grid/gridRoot";
import { Button } from "@/components/home/button";

type CtaSectionProps = {
  variant?: "default" | "careers";
};

const content = {
  default: {
    label: "Join us",
    title: "Get started with AI-Led Growth",
    description:
      "Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth.",
    buttonText: "Discover now",
    buttonHref: "https://growthx.ai/book-demo",
  },
  careers: {
    label: "Join us",
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
    <section className="pt-20 desktop:pt-44">
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            {label}
          </span>

          {/* Content */}
          <div>
            <h2 className="text-[20px] desktop:text-2xl font-[520] leading-normal desktop:leading-tight tracking-[-0.06em]">
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
