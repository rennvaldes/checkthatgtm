"use client";

import { GridRoot } from "@/components/home/grid/gridRoot";
import { Button } from "@/components/home/button";

export default function BlogSlugCta() {
  return (
    <section className="pt-20 desktop:pt-[176px]">
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Join us
          </span>
          <div>
            <h2 className="text-[20px] desktop:text-2xl font-[520] leading-normal desktop:leading-tight tracking-[-0.06em]">
              Get started with AI-Led Growth
            </h2>
            <p className="text-[20px] desktop:text-2xl font-400 leading-normal desktop:leading-tight tracking-[-0.06em] text-muted-foreground">
              Whether you&apos;re a budding startup or an established enterprise,
              discover how our AI can streamline your content creation and fuel
              your growth.
            </p>

            <div className="mt-8 sticky top-[12px] desktop:top-[14px] z-40 w-fit">
              <Button href="https://growthx.ai/book-demo" variant="primary">
                Discover now
              </Button>
            </div>
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
