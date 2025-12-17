"use client";

import { useInView } from "@react-spring/web";
import { Grid } from "@/components/home/grid/gridRoot";
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
    <section className="pt-20 md:pt-32 lg:pt-44">
      {/* Section Header */}
      <Grid>
        {/* Label - Column 1 on tablet+, full on mobile */}
        <div className="col-span-full md:col-span-1 flex items-start">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            {content.sectionLabel}
          </span>
        </div>

        {/* Gap - Column 2 empty (implicit) */}

        {/* Title & Subtitle - responsive: full -> 6 cols (start 3) -> 8 cols (start 3) */}
        <div className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-8 lg:col-start-3 mt-3 md:mt-0 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-10 after:w-screen after:h-[0.5px] after:bg-border">
          <h2 className="text-[20px] lg:text-2xl font-[520] leading-[1.5] lg:leading-[1.25] tracking-[-0.06em]">
            {content.heading}
          </h2>
          <p className="text-[20px] lg:text-2xl font-400 leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] text-muted-foreground">
            {content.subheading}
          </p>
        </div>

        {/* Columns 11-12 empty (no action needed) */}
      </Grid>

      {/* Main Grid: 2 cols nav + 10 cols content (5+5) */}
      <Grid className="mt-10">
        {/* Sticky Navigation - 2 cols on desktop, hidden on mobile */}
        <PlatformNav
          features={content.features}
          activeFeature={activeFeature}
          onFeatureClick={scrollToFeature}
        />

        {/* Feature sections - each occupies 10 cols */}
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
      </Grid>
    </section>
  );
}
