import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { StickyBookButton } from "./stickyBookButton";

interface HeroTextProps {
  className?: string;
}

export function HeroText({ className }: HeroTextProps) {
  return (
    <section className={cx("pt-20 tablet:pt-32 desktop:pt-44 pb-32", className)}>
      {/* Title */}
      <GridRoot size="normal">
        <h1 className="text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-foreground font-semibold">
            The growth engine
          </span>
          <br />
          <span className="text-muted-foreground">for modern marketing.</span>
        </h1>
      </GridRoot>

      {/* Description Row */}
      <GridRoot size="normal" className="pt-16">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Join us
          </span>
          <div>
            <p className="text-[20px] desktop:text-2xl font-[520] leading-normal desktop:leading-tight tracking-[-0.06em]">
              Powerful AI workflows. Forward-deployed experts. One system that
              turns content into compounding organic growth.
            </p>
          </div>
          <div className="flex justify-start desktop:justify-end mt-6 desktop:mt-0">
            <StickyBookButton />
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
