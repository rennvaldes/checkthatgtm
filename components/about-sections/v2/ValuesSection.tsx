"use client";

import React from "react";
import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";

export default function ValuesSection() {
  const values: {
    number: string;
    title: string;
    description: string;
  }[] = [
    {
      number: "01",
      title: "Communicate with clarity",
      description:
        "Say it simply. We explain complex ideas clearly and directly. Clear writing and speaking builds trust and alignment. We tackle issues head-on and avoid jargon.",
    },
    {
      number: "02",
      title: "Relentless excellence",
      description:
        "Good isn't enough. We hold high standards in everything we do. We take pride in quality and constant improvement. Feedback is essential to raising the bar.",
    },
    {
      number: "03",
      title: "Never stop learning",
      description:
        "Always stay curious. We push ourselves to grow and adapt. We ask questions, challenge assumptions, and seek out new skills. Curiosity keeps us sharp and future‑ready.",
    },
    {
      number: "04",
      title: "Move fast, stay steady",
      description:
        "Speed with judgment. We act quickly without breaking things. We take smart risks and adjust fast when needed. We balance urgency with stability and scale.",
    },
    {
      number: "05",
      title: "Lead with empathy",
      description:
        "Kindness wins. We treat others with respect and humility. We lift each other up and act with care. Awareness of our impact makes us stronger as a team.",
    },
    {
      number: "06",
      title: "Own the outcome",
      description:
        "Be accountable. We don't wait for permission—we take action. Each of us is responsible for results. We solve problems and take initiative.",
    },
    {
      number: "07",
      title: "Master the process first",
      description:
        "Fix the process. We don't throw tech at bad workflows. We start with first principles and get the basics right. Automation comes after the process works well.",
    },
  ];

  return (
    <section className="pt-[105.6px]">
      <Grid>
        {/* Label - 2 columns */}
        <div className="col-span-full md:col-span-2">
          <span className="text-muted-foreground text-sm">Values</span>
        </div>

        {/* Content - responsive: full -> 8 cols -> 10 cols */}
        <div className="col-span-full md:col-span-8 lg:col-span-10 flex flex-col mt-3 md:mt-0">
          {/* Title */}
          <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-[520] text-foreground">
            How we work
          </h2>

          {/* Subtitle */}
          <p className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-normal text-muted-foreground">
            From strategy to output
          </p>
        </div>
      </Grid>

      {/* Values Grid */}
      <Grid
        className="mt-8 relative before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.25px] before:bg-border after:absolute after:inset-x-[calc(-50vw+50%)] after:bottom-0 after:h-[0.25px] after:bg-border"
        noGap
      >
        {values.map((value, index) => {
          const isLast = index === values.length - 1;
          
          return (
            <React.Fragment key={index}>
              {/* Title Column */}
              <div
                className={cx(
                  "col-span-4",
                  "p-5 lg:p-10",
                  "border-border lg:border-l-[0.25px] lg:border-r-[0.25px]",
                  !isLast && "border-b-[0.25px]",
                  "flex flex-col lg:flex-row justify-between lg:justify-start lg:items-center gap-2 lg:gap-5"
                )}
              >
                <div className="size-4 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs lg:text-sm font-medium text-foreground/60">
                    {value.number}
                  </span>
                </div>
                <h3 className="text-base lg:text-lg lg:leading-[1.5] lg:tracking-[-0.04em] font-medium text-foreground">
                  {value.title}
                </h3>
              </div>

              {/* Description Column */}
              <div
                className={cx(
                  "col-span-8",
                  "p-5 lg:p-10",
                  "border-border lg:border-r-[0.25px]",
                  !isLast && "border-b-[0.25px]",
                  "flex items-center"
                )}
              >
                <p className="text-base lg:text-lg text-muted-foreground lg:leading-[1.5] lg:tracking-[-0.04em]">
                  {value.description}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </Grid>
    </section>
  );
}