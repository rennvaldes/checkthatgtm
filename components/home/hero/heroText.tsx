import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";
import { StickyBookButton } from "./stickyBookButton";

interface HeroTextProps {
  className?: string;
}

export function HeroText({ className }: HeroTextProps) {
  return (
    <section className={cx("pt-48 pb-32", className)}>
      {/* Title */}
      <Grid>
        <h1 className="col-span-full text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-foreground font-semibold">
            The growth engine
          </span>
          <br />
          <span className="font-regular text-muted-foreground">
            for modern marketing.
          </span>
        </h1>
      </Grid>

      {/* Description Row */}
      <Grid className="pt-16">
        {/* Label */}
        <div className="col-span-full md:col-span-1 flex items-start">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Join us
          </span>
        </div>

        {/* Gap - col 2 is empty */}

        {/* Description */}
        <div className="col-span-full md:col-span-8 md:col-start-3 mt-3 md:mt-0">
          <p className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em]">
            Powerful AI workflows. Forward-deployed experts. One system that
            turns content into compounding organic growth.
          </p>
        </div>

        {/* Empty cols 9-10 */}

        {/* Button */}
        <div className="col-span-full md:col-span-2 md:col-start-11 flex justify-start md:justify-end mt-6 md:mt-0">
          <StickyBookButton />
        </div>
      </Grid>
    </section>
  );
}
