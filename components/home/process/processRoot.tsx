import React from "react";
import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";
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
    <section className={cx("pt-[176px]", className)}>
      <Grid>
        {/* Label - 2 columns */}
        <div className="col-span-full md:col-span-2">
          <span className="text-muted-foreground text-sm">{content.label}</span>
        </div>

        {/* Content - responsive: full -> 8 cols -> 10 cols */}
        <div className="col-span-full md:col-span-8 lg:col-span-10 flex flex-col mt-3 md:mt-0">
          {/* Title */}
          <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-[580] text-foreground">
            {content.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-normal text-muted-foreground">
            {content.subtitle}
          </p>
        </div>
      </Grid>

      {/* Process Steps Grid */}
      <Grid
        className="mt-8 relative before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.25px] before:bg-border"
        noGap
      >
        {content.steps.map((step) => {
          const IconComponent = stepIcons[step.id as keyof typeof stepIcons];

          return (
            <React.Fragment key={step.id}>
              {/* Icon + Title Column */}
              <div
                className={cx(
                  "col-span-4",
                  "p-5 lg:p-10",
                  "border-border lg:border-l-[0.25px] lg:border-r-[0.25px] border-b-[0.25px]",
                  "flex flex-col lg:flex-row justify-between lg:justify-start lg:items-center gap-2 lg:gap-5"
                )}
              >
                <div className="size-4 flex-shrink-0">
                  <IconComponent />
                </div>
                <h3 className="text-base lg:text-lg font-medium text-foreground">
                  {step.title}
                </h3>
              </div>

              {/* Description Column */}
              <div
                className={cx(
                  "col-span-8",
                  "p-5 lg:p-10",
                  "border-border lg:border-r-[0.25px] border-b-[0.25px]",
                  "flex items-center"
                )}
              >
                <p className="text-base lg:text-lg text-muted-foreground leading-[1.5]">
                  {step.description}
                </p>
              </div>
            </React.Fragment>
          );
        })}

        {/* CTA Section */}
        <div className="col-span-full p-5 lg:p-10 border-border lg:border-l-[0.25px] lg:border-r-[0.25px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-base lg:text-lg text-foreground">
            {content.cta.text}
          </p>
          <Button href={content.cta.url}>{content.cta.buttonText}</Button>
        </div>
      </Grid>
    </section>
  );
}
