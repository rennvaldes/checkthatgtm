import React from "react";
import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { Data } from "@/lib/data";
import {
  IconInputsStrategy,
  IconCalibrationWorkflows,
  IconExecutionIteration,
  IconGrowthScale,
} from "@/components/home/assets/assetsIcons";
import { Button } from "@/components/home/button";

interface ProcessRootProps {
  className?: string;
}

// Map step IDs to their corresponding icon components
const stepIcons = {
  "inputs-strategy": IconInputsStrategy,
  "calibration-workflows": IconCalibrationWorkflows,
  "execution-iteration": IconExecutionIteration,
  "growth-scale": IconGrowthScale,
};

export function ProcessRoot({ className }: ProcessRootProps) {
  const content = Data.process();

  return (
    <section className={cx("pt-20 tablet:pt-32 desktop:pt-44", className)}>
      {/* Header */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            {content.label}
          </span>

          {/* Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-[520] text-foreground">
              {content.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-normal text-muted-foreground">
              {content.subtitle}
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Process Steps Grid */}
      <GridRoot
        size="normal"
        className="mt-8 relative before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.25px] before:bg-border"
      >
        <div>
          {content.steps.map((step) => {
            const IconComponent = stepIcons[step.id as keyof typeof stepIcons];

            return (
              <div
                key={step.id}
                className="desktop:grid desktop:grid-cols-[1fr_2fr]"
              >
                {/* Icon + Title Column */}
                <div
                  className={cx(
                    "p-5 desktop:p-10",
                    "border-border desktop:border-l-[0.25px] desktop:border-r-[0.25px] border-b-[0.25px]",
                    "flex flex-col desktop:flex-row justify-between desktop:justify-start desktop:items-center gap-2 desktop:gap-5"
                  )}
                >
                  <div className="size-4 shrink-0">
                    <IconComponent />
                  </div>
                  <h3 className="text-base desktop:text-lg desktop:leading-normal desktop:tracking-[-0.04em] font-medium text-foreground">
                    {step.title}
                  </h3>
                </div>

                {/* Description Column */}
                <div
                  className={cx(
                    "p-5 desktop:p-10",
                    "border-border desktop:border-r-[0.25px] border-b-[0.25px]",
                    "flex items-center"
                  )}
                >
                  <p className="text-base desktop:text-lg text-muted-foreground desktop:leading-normal desktop:tracking-[-0.04em]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CTA Section */}
          <div className="p-5 desktop:p-10 border-border desktop:border-l-[0.25px] desktop:border-r-[0.25px] flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-4">
            <p className="text-base desktop:text-lg desktop:leading-normal desktop:tracking-[-0.04em] text-foreground">
              {content.cta.text}
            </p>
            <Button href={content.cta.url}>{content.cta.buttonText}</Button>
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
