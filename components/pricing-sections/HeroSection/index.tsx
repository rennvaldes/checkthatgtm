"use client";

import DotPatternBackground from "@/components/ui/DotPatternBackground";
import useResponsiveDevice from "@/hooks/useResponsiveDevice";
import PromoCard from "./PromoCard";
import PlansCard from "./PlansCard";

function HeroSection() {
  const { isDesktop } = useResponsiveDevice();

  return (
    <section className="relative mt-24 w-full overflow-hidden lg:mt-[7.5rem]">
      <div className="mx-auto text-center mb-4 max-w-[22rem] lg:max-w-[42.5rem]">
        <h2 className="text-ui-blue text-lg font-medium">Pricing Model</h2>
        <h1 className="font-clash-display mx-auto max-w-[90%] text-center text-[36px] font-medium leading-[40px] lg:text-[70px] lg:leading-[77px]">
          Pay for&nbsp;
          <span className="font-kepler-std text-ui-blue text-[42px] italic lg:text-[80px]">
            outcomes
          </span>
          , not hours or tools
        </h1>
      </div>

      <div className="hidden lg:block">
        <DotPatternBackground
          dotStartingWidthPx={!isDesktop ? 1 : undefined}
          dotWidthPxIncreasePerRow={!isDesktop ? 0.3 : undefined}
          dotsSeparationPx={
            !isDesktop ? { vertical: 40, horizontal: 42 } : undefined
          }
          dotPatternTopPaddingPx={!isDesktop ? 140 : 320}
        />
      </div>

      <div className="flex items-center flex-wrap justify-center gap-[2.1875rem] mt-10 mb-10 lg:mt-16 px-4 lg:px-0 lg:mb-[9rem] xl:h-[32.5rem]">
        <PromoCard />
        <PlansCard />
      </div>
    </section>
  );
}

export default HeroSection;
