import { Grid } from "@/components/home/grid/gridRoot";
import { Button } from "@/components/home/button";

export default function HeroSectionv2() {
  return (
    <section className="pt-48 pb-32">
      {/* Title */}
      <Grid>
        <h1 className="col-span-full text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-foreground font-semibold">
            Reimagining
          </span>
          <br />
          <span className="font-regular text-muted-foreground">
            Service as Software
          </span>
        </h1>
      </Grid>

      {/* Description Row */}
      <Grid className="pt-16">
        {/* Label */}
        <div className="col-span-full md:col-span-1">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Company
          </span>
        </div>

        {/* Gap - col 2 is empty */}

        {/* Description */}
        <div className="col-span-full md:col-span-8 md:col-start-3 mt-3 md:mt-0">
          <p className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em]">
            High-quality content production in 8 weeks. Publishing 5 articles per week across multiple topic categories.
          </p>
        </div>

        {/* Empty cols 9-10 */}

        {/* Button */}
        <div className="col-span-full md:col-span-2 md:col-start-11 flex justify-start md:justify-end mt-6 md:mt-0">
          <Button href="/careers" variant="primary">
            Join our Mission
          </Button>
        </div>
      </Grid>
    </section>
  );
}
