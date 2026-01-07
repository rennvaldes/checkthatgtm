import { GridRoot } from "@/components/home/grid/gridRoot";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <GridRoot size="normal">
      <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
        {/* Label */}
        <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
          {label}
        </span>

        {/* Content */}
        <div className="flex flex-col">
          {/* Title */}
          <h2 className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-[520] text-foreground">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-[20px] desktop:text-2xl leading-normal desktop:leading-tight tracking-[-0.06em] font-normal text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </GridRoot>
  );
}
