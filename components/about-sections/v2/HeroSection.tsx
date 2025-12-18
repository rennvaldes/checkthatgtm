import { Grid } from "@/components/home/grid/gridRoot";

export default function HeroSectionv2() {
  return (
    <section className="pt-20 md:pt-32 lg:pt-44 pb-32">
      {/* Title */}
      <Grid>
        <h1 className="col-span-full text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-muted-foreground font-regular">
            Reimagining
          </span>
          <br />
          <span className="font-[520] text-foreground">
            Service as Software.
          </span>
        </h1>
      </Grid>

      {/* Description Row */}
      <Grid className="pt-16">
        {/* Label */}
        <div className="col-span-full md:col-span-1 flex items-start">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            In short
          </span>
        </div>

        {/* Gap - col 2 is empty */}

        {/* Description */}
        <div className="col-span-full md:col-span-10 md:col-start-3 mt-3 md:mt-0">
          <p className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em]">
            At GrowthX, we believe the future isn&apos;t just building better
            tools—it&apos;s treating services like software. We structure
            knowledge work as living code: versioned, observed, and continuously
            improved through AI-driven workflows with expert refinement at the
            core.
            <br />
            <br />
            Our services are dynamic, scalable workflows that learn, adapt, and
            compound value over time. We aren&apos;t here to sell hours or
            software licenses. We build engines for growth that operate like the
            best software platforms: fast, flexible, and relentlessly
            outcome-focused.
          </p>
        </div>
      </Grid>
    </section>
  );
}
