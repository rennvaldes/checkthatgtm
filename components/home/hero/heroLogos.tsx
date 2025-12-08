import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";
import {
  RampLogo,
  WebflowLogo,
  AbnormalLogo,
  UdemyLogo,
  RedditLogo,
  SuperhumanLogo,
  OktaLogo,
  BasecampLogo,
  DeepgramLogo,
  HashiCorpLogo,
  ScaleAILogo,
  IFTTTLogo,
  TechstarsLogo,
  ServiceTitanLogo,
  CanopyLogo,
  MadronaLogo,
} from "@/components/home/assets/assetsLogos";

interface HeroLogosProps {
  className?: string;
}

// Desktop: logo, empty, logo, empty pattern for checkerboard
const LOGO_CELLS = [
  { id: 1, logo: <RampLogo /> },
  { id: 2, logo: null },
  { id: 3, logo: <WebflowLogo /> },
  { id: 4, logo: null },
  { id: 5, logo: <AbnormalLogo /> },
  { id: 6, logo: null },
  { id: 7, logo: <UdemyLogo /> },
  { id: 8, logo: null },
  { id: 9, logo: <RedditLogo /> },
  { id: 10, logo: null },
  { id: 11, logo: <SuperhumanLogo /> },
  { id: 12, logo: null },
  { id: 13, logo: <OktaLogo /> },
  { id: 14, logo: null },
  { id: 15, logo: <BasecampLogo /> },
  { id: 16, logo: null },
  { id: 17, logo: <DeepgramLogo /> },
  { id: 18, logo: null },
  { id: 19, logo: <HashiCorpLogo /> },
  { id: 20, logo: null },
  { id: 21, logo: <ScaleAILogo /> },
  { id: 22, logo: null },
];

// Mobile only: logos arranged for checkerboard on 3 columns
// Row 1 (odd): col 1, 3
// Row 2 (even): col 2
// Row 3 (odd): col 1, 3
// Row 4 (even): col 2
// Row 5 (odd): col 1, 3
// Row 6 (even): col 2
// Row 7 (odd): col 1, 3
const MOBILE_LOGO_CELLS = [
  // Row 1: logos in col 1 and 3
  { id: 1, logo: <RampLogo /> },
  { id: 2, logo: null },
  { id: 3, logo: <WebflowLogo /> },
  // Row 2: logo in col 2
  { id: 4, logo: null },
  { id: 5, logo: <AbnormalLogo /> },
  { id: 6, logo: null },
  // Row 3: logos in col 1 and 3
  { id: 7, logo: <UdemyLogo /> },
  { id: 8, logo: null },
  { id: 9, logo: <RedditLogo /> },
  // Row 4: logo in col 2
  { id: 10, logo: null },
  { id: 11, logo: <SuperhumanLogo /> },
  { id: 12, logo: null },
  // Row 5: logos in col 1 and 3
  { id: 13, logo: <OktaLogo /> },
  { id: 14, logo: null },
  { id: 15, logo: <BasecampLogo /> },
  // Row 6: logo in col 2
  { id: 16, logo: null },
  { id: 17, logo: <DeepgramLogo /> },
  { id: 18, logo: null },
  // Row 7: logos in col 1 and 3
  { id: 19, logo: <HashiCorpLogo /> },
  { id: 20, logo: null },
  { id: 21, logo: <ScaleAILogo /> },
];

function LogoCell({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={cx(
        "flex items-center justify-center",
        "h-[86px] px-10",
        "shadow-[inset_0_0_0_0.25px_hsl(var(--border))]",
        "[&_svg]:h-6 [&_svg]:max-h-6 [&_svg]:w-auto"
      )}
    >
      {children}
    </div>
  );
}

export function HeroLogos({ className }: HeroLogosProps) {
  return (
    <section className={cx("pt-16", className)}>
      {/* Header */}
      <Grid>
        {/* Label */}
        <div className="col-span-full md:col-span-1">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Customers
          </span>
        </div>

        {/* Gap - col 2 is empty */}

        {/* Description - responsive: full -> 6 cols (start 3) -> 8 cols (start 3) */}
        <div className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-8 lg:col-start-3 mt-3 md:mt-0">
          <p className="text-[20px] lg:text-2xl font-[520] leading-[1.5] lg:leading-[1.25] tracking-[-0.03em] lg:tracking-[-0.06em]">
            Trusted by the world&apos;s fastest-growing startups and reputable
            brands.
          </p>
        </div>
      </Grid>

      {/* Mobile Logo Grid - 3 cols, 7 rows, checkerboard pattern */}
      <div
        className={cx(
          "grid w-full my-10 sm:hidden",
          "grid-cols-3",
          "grid-rows-[repeat(7,86px)]"
        )}
      >
        {MOBILE_LOGO_CELLS.map((item) => (
          <LogoCell key={item.id}>{item.logo}</LogoCell>
        ))}
      </div>

      {/* Desktop Logo Grid - responsive columns, 2 rows */}
      <div
        className={cx(
          "hidden sm:grid w-full mt-10",
          "sm:grid-cols-3",
          "lg:grid-cols-5",
          "2xl:grid-cols-7",
          "4xl:grid-cols-9",
          "6xl:grid-cols-11",
          "grid-rows-[86px_86px] max-h-[172px] overflow-hidden"
        )}
      >
        {LOGO_CELLS.map((item) => (
          <LogoCell key={item.id}>{item.logo}</LogoCell>
        ))}
      </div>
    </section>
  );
}
