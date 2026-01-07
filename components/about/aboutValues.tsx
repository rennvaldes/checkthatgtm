"use client";

import React from "react";
import { cx } from "@/lib/classnames";
import { GridRoot, GRID, SIZE_STYLES } from "@/components/home/grid/gridRoot";
import {
  IconClarity,
  IconExcellence,
  IconCuriosity,
  IconSpeed,
  IconEmpathy,
  IconOwnership,
  IconProcess,
} from "./assets/aboutIcons";

const values = [
  {
    icon: IconClarity,
    title: "Clarity",
    description: "Make the complex simple.",
  },
  {
    icon: IconExcellence,
    title: "Excellence",
    description: "Raise the bar, week after week.",
  },
  {
    icon: IconCuriosity,
    title: "Curiosity",
    description: "Keep learning and questioning.",
  },
  {
    icon: IconSpeed,
    title: "Speed",
    description: "Fast where it counts.",
  },
  {
    icon: IconEmpathy,
    title: "Empathy",
    description: "Be direct, kind and constructive.",
  },
  {
    icon: IconOwnership,
    title: "Ownership",
    description: "Take initiative and deliver.",
  },
  {
    icon: IconProcess,
    title: "Process first",
    description: "Fix workflows before automation.",
  },
];

export function AboutValues() {
  return (
    <section className="my-[4.375rem] desktop:my-24 cinema:my-32">
      {/* Header */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Values
          </span>

          {/* Title group */}
          <div>
            <h2 className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-[520] text-foreground">
              How we work
            </h2>
            <p className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-normal text-muted-foreground">
              From strategy to output
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Top HR - full width */}
      <hr className="border-0 h-[0.5px] bg-border m-0 w-full mt-8" />

      {/* Values Grid */}
      <div className={cx(GRID, "w-full max-w-[1920px] mx-auto")}>
        <div className={cx(SIZE_STYLES.normal, "grid grid-cols-12 desktop:gap-0")}>
          {values.map((value, index) => {
            const isLast = index === values.length - 1;

            return (
              <React.Fragment key={index}>
                {/* Title Column */}
                <div
                  className={cx(
                    "col-span-12 desktop:col-span-4",
                    "px-5 pt-5 desktop:p-10",
                    "border-border desktop:border-l-[0.25px] desktop:border-r-[0.25px]",
                    !isLast && "desktop:border-b-[0.25px]",
                    "flex flex-row items-center gap-2 desktop:gap-5"
                  )}
                >
                  <div className="shrink-0 flex items-center justify-start">
                    <value.icon />
                  </div>
                  <h3 className="text-base desktop:text-lg desktop:leading-normal desktop:tracking-[-0.04em] font-medium text-foreground">
                    {value.title}
                  </h3>
                </div>

                {/* Description Column */}
                <div
                  className={cx(
                    "col-span-12 desktop:col-span-8",
                    "px-5 pb-5 desktop:p-10",
                    "border-border desktop:border-r-[0.25px]",
                    !isLast && "border-b-[0.25px]",
                    "flex items-center"
                  )}
                >
                  <p className="text-base desktop:text-lg text-muted-foreground desktop:leading-normal desktop:tracking-[-0.04em]">
                    {value.description}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom HR - full width */}
      <hr className="border-0 h-[0.5px] bg-border m-0 w-full" />
    </section>
  );
}
