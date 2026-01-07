"use client";

import { useState, useEffect, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";
import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import {
  RampLogo,
  WebflowLogo,
  AbnormalLogo,
  UdemyLogo,
  RedditLogo,
  SuperhumanLogo,
  DeepgramLogo,
  ServiceTitanLogo,
  OktaLogo,
  BrexLogo,
  AirbyteLogo,
  EngineLogo,
  MetronomeLogo,
  SurgeLogo,
  LovableLogo,
  GalileoLogo,
  RelayLogo,
  YouDotComLogo,
  Auth0Logo,
} from "@/components/home/assets/assetsLogos";

interface HeroLogosProps {
  className?: string;
}

// ODD POSITIONS - State A (14 logos)
const ODD_POSITION_LOGOS = [
  { id: 1, pos: 1, logo: <RampLogo /> },
  { id: 3, pos: 3, logo: <WebflowLogo /> },
  { id: 5, pos: 5, logo: <AbnormalLogo /> },
  { id: 7, pos: 7, logo: <UdemyLogo /> },
  { id: 9, pos: 9, logo: <RedditLogo /> },
  { id: 11, pos: 11, logo: <SuperhumanLogo /> },
  { id: 13, pos: 13, logo: <GalileoLogo /> },
  { id: 15, pos: 15, logo: <DeepgramLogo /> },
  { id: 17, pos: 17, logo: <ServiceTitanLogo /> },
  { id: 19, pos: 19, logo: <Auth0Logo /> },
  { id: 21, pos: 21, logo: <BrexLogo /> },
  { id: 23, pos: 23, logo: <EngineLogo /> },
  { id: 25, pos: 25, logo: <LovableLogo /> },
  { id: 27, pos: 27, logo: <RelayLogo /> },
];

// EVEN POSITIONS - State B (13 logos)
const EVEN_POSITION_LOGOS = [
  { id: 2, pos: 2, logo: <OktaLogo /> },
  { id: 4, pos: 4, logo: <AirbyteLogo /> },
  { id: 6, pos: 6, logo: <MetronomeLogo /> },
  { id: 8, pos: 8, logo: <SurgeLogo /> },
  { id: 10, pos: 10, logo: <YouDotComLogo /> },
  { id: 12, pos: 12, logo: <RampLogo /> },
  { id: 14, pos: 14, logo: <WebflowLogo /> },
  { id: 16, pos: 16, logo: <AbnormalLogo /> },
  { id: 18, pos: 18, logo: <UdemyLogo /> },
  { id: 20, pos: 20, logo: <RedditLogo /> },
  { id: 22, pos: 22, logo: <SuperhumanLogo /> },
  { id: 24, pos: 24, logo: <GalileoLogo /> },
  { id: 26, pos: 26, logo: <DeepgramLogo /> },
];

// Animated logo component that transitions between visible/hidden
function AnimatedLogo({
  logo,
  isVisible,
  delay = 0,
}: {
  logo: ReactNode;
  isVisible: boolean;
  delay?: number;
}) {
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.875,
    filter: isVisible ? "blur(0px)" : "blur(3px)",
    config: { tension: 160, friction: 25, precision: 0.0001 },
    delay,
  });

  return (
    <animated.div
      style={spring}
      className="absolute inset-0 flex items-center justify-center [&_svg]:max-h-5 [&_svg]:w-auto transform-gpu"
    >
      {logo}
    </animated.div>
  );
}

export function HeroLogos({ className }: HeroLogosProps) {
  // State for cycling between odd and even logo positions
  const [showEven, setShowEven] = useState(false);

  // Cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowEven((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cx("pt-16", className)}>
      {/* Header */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Customers
          </span>
          <div>
            <p className="text-[20px] desktop:text-2xl font-[520] leading-normal desktop:leading-tight tracking-[-0.06em]">
              Trusted by the world&apos;s fastest-growing startups and reputable
              brands.
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Mobile Logo Grid - 3 cols, animated checkerboard pattern */}
      <div
        className={cx(
          "grid w-full my-10 sm:hidden",
          "grid-cols-3",
          "grid-rows-[repeat(9,86px)]"
        )}
      >
        {Array.from({ length: 27 }).map((_, index) => {
          const position = index + 1;

          // Mobile checkerboard pattern (3 cols × 9 rows)
          // Row 1: Logo, Empty, Logo
          // Row 2: Empty, Logo, Empty
          // Row 3: Logo, Empty, Logo
          // Row 4: Empty, Logo, Empty
          // Row 5: Logo, Empty, Logo
          // Row 6: Empty, Logo, Empty
          // Row 7: Logo, Empty, Logo
          // Row 8: Empty, Logo, Empty
          // Row 9: Logo, Empty, Logo
          const logoPositions = [
            1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27,
          ];
          const hasLogo = logoPositions.includes(position);
          const logoIndex = logoPositions.indexOf(position);

          const oddLogo = hasLogo && ODD_POSITION_LOGOS[logoIndex];
          const evenLogo = hasLogo && EVEN_POSITION_LOGOS[logoIndex];

          // Stagger delay for mobile (simpler pattern)
          const row = Math.floor(index / 3);
          const col = index % 3;
          const staggerDelay = row * 100 + col * 50;

          return (
            <div
              key={position}
              className={cx(
                "flex items-center justify-center relative",
                "h-[86px] px-10",
                "shadow-[inset_0_0_0_0.25px_hsl(var(--border))]"
              )}
            >
              {/* Odd position logo */}
              {oddLogo && (
                <AnimatedLogo
                  logo={oddLogo.logo}
                  isVisible={!showEven}
                  delay={staggerDelay}
                />
              )}

              {/* Even position logo */}
              {evenLogo && (
                <AnimatedLogo
                  logo={evenLogo.logo}
                  isVisible={showEven}
                  delay={staggerDelay}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Logo Grid - responsive columns, 3 rows, with animated cycling */}
      <div
        className={cx(
          "hidden sm:grid w-full mt-10",
          "sm:grid-cols-3",
          "lg:grid-cols-5",
          "2xl:grid-cols-7",
          "4xl:grid-cols-9",
          "grid-rows-[86px_86px_86px] max-h-[258px] overflow-hidden"
        )}
      >
        {Array.from({ length: 27 }).map((_, index) => {
          const position = index + 1;
          const isOddPosition = position % 2 === 1;

          // Get logo for this position
          const oddLogo = ODD_POSITION_LOGOS.find(
            (item) => item.pos === position
          );
          const evenLogo = EVEN_POSITION_LOGOS.find(
            (item) => item.pos === position
          );

          // Stagger delay: column-based with offset for rows
          // Positions 1-9 are row 1, 10-18 are row 2, 19-27 are row 3
          const isRow1 = position <= 9;
          const isRow2 = position > 9 && position <= 18;
          const column = isRow1
            ? position - 1
            : isRow2
            ? position - 10
            : position - 19;
          // Row 1: 0ms, 100ms, 200ms, ...
          // Row 2: 100ms, 200ms, 300ms, ... (adds 100ms base delay)
          // Row 3: 200ms, 300ms, 400ms, ... (adds 200ms base delay)
          const staggerDelay = isRow1
            ? column * 100
            : isRow2
            ? 100 + column * 100
            : 200 + column * 100;

          return (
            <div
              key={position}
              className={cx(
                "flex items-center justify-center relative",
                "h-[86px] px-10",
                "shadow-[inset_0_0_0_0.25px_hsl(var(--border))]"
              )}
            >
              {/* Odd position logo */}
              {oddLogo && (
                <AnimatedLogo
                  logo={oddLogo.logo}
                  isVisible={!showEven}
                  delay={staggerDelay}
                />
              )}

              {/* Even position logo */}
              {evenLogo && (
                <AnimatedLogo
                  logo={evenLogo.logo}
                  isVisible={showEven}
                  delay={staggerDelay}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
