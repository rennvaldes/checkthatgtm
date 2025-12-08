"use client";

import { Grid } from "@/components/home/grid/gridRoot";
import { Button } from "@/components/home/button";

export function CtaSection() {
  return (
    <section className="pt-[176px]">
      <Grid>
        {/* Label - Column 1 on tablet+, full on mobile */}
        <div className="col-span-full md:col-span-1">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Join us
          </span>
        </div>

        {/* Gap - Column 2 empty (implicit) */}

        {/* Title & Subtitle & CTA - responsive */}
        <div className="col-span-full md:col-span-8 md:col-start-3 mt-3 md:mt-0">
          <h2 className="text-[20px] lg:text-2xl font-[520] leading-[1.5] lg:leading-[1.25] tracking-[-0.06em]">
            Get started with AI-Led Growth
          </h2>
          <p className="text-[20px] lg:text-2xl font-400 leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] text-muted-foreground">
            Whether you&apos;re a budding startup or an established enterprise,
            discover how our AI can streamline your content creation and fuel
            your growth.
          </p>

          <div className="mt-8 sticky top-[12px] md:top-[14px] z-40 w-fit">
            <Button href="https://growthx.ai/book-demo" variant="primary">
              Discover now
            </Button>
          </div>
        </div>

        {/* Columns 11-12 empty (implicit) */}
      </Grid>
    </section>
  );
}
