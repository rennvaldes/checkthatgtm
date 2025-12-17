"use client";

import { PlatformVisual } from "./platformVisual";
import {
  IconContext,
  IconStrategy,
  IconExecution,
  IconOptimization,
} from "@/components/home/assets/assetsIcons";

interface Feature {
  id: string;
  title: string;
  description: string;
  visual: {
    type: string;
    items: any;
  };
}

interface PlatformSectionProps {
  feature: Feature;
  inView: boolean;
  sectionRef: React.Ref<HTMLDivElement>;
}

export function PlatformSection({
  feature,
  inView,
  sectionRef,
}: PlatformSectionProps) {
  return (
    <div
      ref={sectionRef}
      id={feature.id}
      className="col-span-full md:col-span-10 md:col-start-3 lg:col-span-10 lg:col-start-3 flex items-center md:items-stretch flex-col md:flex-row pt-6 md:pt-0 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-screen after:h-[0.5px] after:bg-border md:after:hidden"
    >
      {/* Feature Visual */}
      <PlatformVisual visual={feature.visual} inView={inView} />

      {/* Feature Content - takes half width */}
      <div className="w-full max-w-[492px] md:max-w-none flex-1 px-0 md:px-10 py-6 md:py-0 flex flex-col justify-center md:shadow-[inset_0_0_0_0.25px_hsl(var(--border))] relative">
        {/* Feature icons - absolute on tablet+ */}
        {feature.id === "context" && (
          <div className="hidden md:block absolute top-10 right-10">
            <IconContext />
          </div>
        )}
        {feature.id === "strategy" && (
          <div className="hidden md:block absolute top-10 right-10">
            <IconStrategy />
          </div>
        )}
        {feature.id === "execution" && (
          <div className="hidden md:block absolute top-10 right-10">
            <IconExecution />
          </div>
        )}
        {feature.id === "optimization" && (
          <div className="hidden md:block absolute top-10 right-10">
            <IconOptimization />
          </div>
        )}

        <h3 className="text-[18px] leading-[1.5] tracking-[-0.03em] mb-[9px] flex items-center">
          {/* Inline icon on mobile */}
          <span className="md:hidden mr-3 w-4 h-4 [&_svg]:w-4 [&_svg]:h-4">
            {feature.id === "context" && <IconContext />}
            {feature.id === "strategy" && <IconStrategy />}
            {feature.id === "execution" && <IconExecution />}
            {feature.id === "optimization" && <IconOptimization />}
          </span>
          {feature.title}
        </h3>
        <p className="text-[18px] leading-[1.5] tracking-[-0.03em] text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
