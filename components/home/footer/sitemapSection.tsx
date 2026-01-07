import { GridRoot } from "@/components/home/grid/gridRoot";

export function SitemapSection() {
  return (
    <section className="w-full bg-secondary">
      <GridRoot size="normal" className="h-[66px] items-center">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <div />
          <p className="text-sm text-muted-foreground">
            © 2025 GrowthX. All rights reserved.
          </p>
        </div>
      </GridRoot>
    </section>
  );
}
