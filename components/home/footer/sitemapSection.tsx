import { Grid } from "@/components/home/grid/gridRoot";

export function SitemapSection() {
  return (
    <section className="w-full bg-secondary">
      <div className="h-[66px]">
        <Grid className="h-full items-center">
          <div className="col-span-full">
            <p className="text-sm text-muted-foreground">
              © 2025 GrowthX. All rights reserved.
            </p>
          </div>
        </Grid>
      </div>
    </section>
  );
}
