import { GridRoot } from "@/components/home/grid/gridRoot";

export function SitemapSection() {
  return (
    <section className="w-full bg-[#F9F9F9] border-t border-border relative z-20">
      <GridRoot size="normal" className="h-[66px] items-center">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <div />
          <p className="text-sm text-muted-foreground">
            © 2026 CheckThat is built with love by <a href="https://growthx.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GrowthX</a>. All rights reserved.
          </p>
        </div>
      </GridRoot>
    </section>
  );
}
