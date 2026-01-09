"use client";

import { useInView } from "@react-spring/web";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { Data } from "@/lib/data";
import { PlatformNav } from "./platformNav";
import { PlatformSection } from "./platformSection";

export function PlatformFeatures() {
  const content = Data.platformFeatures();

  // Track each section with useInView
  const [contextRef, contextInView] = useInView({
    rootMargin: "-25% 0px -75% 0px",
  });
  const [strategyRef, strategyInView] = useInView({
    rootMargin: "-25% 0px -75% 0px",
  });
  const [executionRef, executionInView] = useInView({
    rootMargin: "-25% 0px -75% 0px",
  });
  const [optimizationRef, optimizationInView] = useInView({
    rootMargin: "-25% 0px -75% 0px",
  });

  // Determine active feature (first in view wins)
  const activeFeature = contextInView
    ? "context"
    : strategyInView
    ? "strategy"
    : executionInView
    ? "execution"
    : optimizationInView
    ? "optimization"
    : "context";

  const scrollToFeature = (featureId: string) => {
    const element = document.getElementById(featureId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="pt-20 tablet:pt-32 desktop:pt-44">
      {/* Section Header */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            {content.sectionLabel}
          </span>
          <div className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-10 after:w-screen after:h-[0.5px] after:bg-border">
            <h2 className="text-[20px] desktop:text-2xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em]">
              {content.heading}
            </h2>
            <p className="text-[20px] desktop:text-2xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em]" style={{color: "#0ABF53"}}>
              {content.subheading}
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Main Content: Nav + Sections using flex for sticky behavior */}
      <GridRoot size="normal" className="mt-10">
        <div className="desktop:flex">
          {/* Sticky Navigation */}
          <PlatformNav
            features={content.features}
            activeFeature={activeFeature}
            onFeatureClick={scrollToFeature}
          />

          {/* Feature sections */}
          <div className="flex-1">
            <PlatformSection
              feature={content.features[0]}
              inView={contextInView}
              sectionRef={contextRef}
            />
            <PlatformSection
              feature={content.features[1]}
              inView={strategyInView}
              sectionRef={strategyRef}
            />
            <PlatformSection
              feature={content.features[2]}
              inView={executionInView}
              sectionRef={executionRef}
            />
            <PlatformSection
              feature={content.features[3]}
              inView={optimizationInView}
              sectionRef={optimizationRef}
            />
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
