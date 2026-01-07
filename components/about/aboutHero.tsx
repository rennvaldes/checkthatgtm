import { GridRoot } from "@/components/home/grid/gridRoot";

export function AboutHero() {
  return (
    <section className="pt-20 tablet:pt-32 desktop:pt-44">
      {/* Title */}
      <GridRoot size="normal">
        <h1 className="text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-muted-foreground">Reimagining</span>
          <br />
          <span className="font-[520] text-foreground">
            Service as Software.
          </span>
        </h1>
      </GridRoot>

      {/* Description */}
      <GridRoot
        size="normal"
        className="mt-[4.375rem] desktop:mt-24 cinema:mt-32"
      >
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            In short
          </span>

          {/* Description */}
          <p className="text-2xl font-[520] leading-tight tracking-[-0.06em]">
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
      </GridRoot>
    </section>
  );
}
