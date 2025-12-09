import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";
import { PeopleAvatarStack } from "./peopleAvatarStack";
import { PeopleCompanyLogos } from "./peopleCompanyLogos";
import { Data } from "@/lib/data";

interface PeopleRootProps {
  className?: string;
}

export function PeopleRoot({ className }: PeopleRootProps) {
  const content = Data.people();

  return (
    <section
      className={cx(
        "pt-[176px] border-t-[0.5px] border-border overflow-x-clip",
        className
      )}
    >
      <Grid>
        {/* Label - 2 columns */}
        <div className="col-span-full md:col-span-2">
          <span className="text-muted-foreground text-sm">{content.label}</span>
        </div>

        {/* Content - responsive: full -> 8 cols -> 10 cols */}
        <div className="col-span-full md:col-span-10 flex flex-col mt-3 md:mt-0">
          {/* Title */}
          <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-[520] text-foreground">
            {content.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-normal text-muted-foreground">
            {content.subtitle}
          </p>

          {/* Two-column row: Avatars + Company Logos */}
          <div className="md:flex gap-x-10 mt-8 min-w-0">
            {/* Left: Avatar Stack */}
            <div className="flex flex-col gap-y-[9px]">
              <span className="text-foreground text-base lg:text-lg lg:leading-[1.5] lg:tracking-[-0.04em]">
                {content.avatarLabel}
              </span>
              <PeopleAvatarStack team={content.team} />
            </div>

            {/* Right: Company Logos */}
            <div className="flex flex-col gap-y-[9px] mt-6 md:mt-0">
              <span className="text-foreground text-base lg:text-lg lg:leading-[1.5] lg:tracking-[-0.04em]">
                {content.companyLabel}
              </span>
              <PeopleCompanyLogos companies={content.companies} />
            </div>
          </div>
        </div>
      </Grid>
    </section>
  );
}
