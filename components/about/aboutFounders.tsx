import { Fragment } from "react";
import { CloudflareImage } from "@/components/ui/CloudflareImage";
import { GridRoot } from "@/components/home/grid/gridRoot";

const founders = [
  {
    name: "Marcel Santilli",
    role: "Co-Founder & CEO · Ex-CMO at Deepgram, Scale AI, HashiCorp, ServiceTitan",
    bio: "Marcel spent 15+ years building growth engines at companies that went on to $9B-$29B outcomes. Now he's brought that playbook to GrowthX AI.",
    image: "/images/avatars/avatar-marcel.webp",
  },
  {
    name: "Daniel Lopes",
    role: "Co-Founder & CTO · Ex-Canopy (37signals spin-off)",
    bio: "Daniel leads engineering and product at GrowthX AI, building the systems that turn content into growth.",
    image: "/images/avatars/avatar-daniel.webp",
  },
];

export function AboutFounders() {
  return (
    <section className="my-[4.375rem] desktop:my-24 cinema:my-32">
      {/* Header */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Founders
          </span>

          {/* Title group */}
          <div>
            <h2 className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-[520] text-foreground">
              Founders
            </h2>
            <p className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-normal text-muted-foreground">
              shaping what&apos;s next.
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Top HR */}
      <hr className="border-0 h-[0.5px] bg-border w-full mt-8" />

      {/* Founders - stacked on mobile, side-by-side on tablet+ */}
      <GridRoot size="normal">
        <ul className="list-none m-0 p-0 flex flex-col tablet:flex-row items-stretch">
          {/* Left divider - vertical on tablet+ */}
          <li
            className="hidden tablet:block w-[0.5px] bg-border shrink-0"
            aria-hidden="true"
          />

          {founders.map((founder, index) => (
            <Fragment key={founder.name}>
              {/* Horizontal divider on mobile (between items) */}
              {index > 0 && (
                <li
                  className="tablet:hidden h-[0.5px] w-full bg-border shrink-0"
                  aria-hidden="true"
                />
              )}

              {/* Founder */}
              <li className="flex-1 py-8 tablet:p-12 desktop:p-16 cinema:p-32 flex flex-col">
                {/* Photo */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <CloudflareImage
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes={{ desktop: "50vw", mobile: "100vw" }}
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="mt-8 text-left">
                  <h3 className="text-sm cinema:text-lg tracking-[-0.02em] cinema:tracking-[-0.01em] leading-[1.45] tablet:leading-[1.55] desktop:leading-[1.6] font-medium text-foreground">
                    {founder.name}
                  </h3>
                  <span className="block text-sm cinema:text-lg tracking-[-0.02em] cinema:tracking-[-0.01em] leading-[1.45] tablet:leading-[1.55] desktop:leading-[1.6] text-muted-foreground">
                    {founder.role}
                  </span>
                  <p className="mt-6 text-sm cinema:text-lg tracking-[-0.02em] cinema:tracking-[-0.01em] leading-[1.45] tablet:leading-[1.55] desktop:leading-[1.6] text-muted-foreground">
                    {founder.bio}
                  </p>
                </div>
              </li>

              {/* Right divider - vertical on tablet+ */}
              <li
                className="hidden tablet:block w-[0.5px] bg-border shrink-0"
                aria-hidden="true"
              />
            </Fragment>
          ))}
        </ul>
      </GridRoot>

      {/* Bottom HR */}
      <hr className="border-0 h-[0.5px] bg-border w-full" />
    </section>
  );
}
