import { Grid } from "@/components/home/grid/gridRoot";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <Grid>
      {/* Label - 2 columns */}
      <div className="col-span-full md:col-span-2">
        <span className="text-muted-foreground text-sm">{label}</span>
      </div>

      {/* Content - responsive: full -> 8 cols -> 10 cols */}
      <div className="col-span-full md:col-span-8 lg:col-span-10 flex flex-col mt-3 md:mt-0">
        {/* Title */}
        <h2 className="text-section-header font-[520] text-foreground">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-section-header font-normal text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </Grid>
  );
}
