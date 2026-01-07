import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
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
        "pt-20 tablet:pt-32 desktop:pt-44 border-t-[0.5px] border-border overflow-x-clip",
        className
      )}
    >
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            {content.label}
          </span>

          {/* Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-[520] text-foreground">
              {content.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-normal text-muted-foreground">
              {content.subtitle}
            </p>

            {/* Two-column row: Avatars + Company Logos */}
            <div className="tablet:flex gap-x-10 mt-8 min-w-0">
              {/* Left: Avatar Stack */}
              <div className="flex flex-col gap-y-[9px]">
                <span className="text-foreground text-base desktop:text-lg desktop:leading-normal desktop:tracking-[-0.04em]">
                  {content.avatarLabel}
                </span>
                <PeopleAvatarStack team={content.team} />
              </div>

              {/* Right: Company Logos */}
              <div className="flex flex-col gap-y-[9px] mt-6 tablet:mt-0">
                <span className="text-foreground text-base desktop:text-lg desktop:leading-normal desktop:tracking-[-0.04em]">
                  {content.companyLabel}
                </span>
                <PeopleCompanyLogos companies={content.companies} />
              </div>
            </div>
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
