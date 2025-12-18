import HeroSectionv2 from "@/components/about-sections/v2/HeroSection";
import VisualHero from "@/components/about-sections/v2/VisualHero";
import Spacer from "@/components/common/Spacer";
import ValuesSection from "@/components/about-sections/v2/ValuesSection";
import TeamSection from "@/components/about-sections/v2/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABannerSection from "@/components/about-sections/v2/CTABannerSection";
import Logo from "@/components/icons/Logo";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="md:hidden h-16 flex items-center pl-5">
        <Logo className="h-[20px] w-auto" />
      </div>
      <HeroSectionv2 />
      <div className="h-9 sm:h-12 md:h-18 lg:h-[73.8px]" aria-hidden="true" />
      <VisualHero />
      <div className="h-8 sm:h-10 md:h-14 lg:h-[59.04px]" aria-hidden="true" />
      <ValuesSection />
      <div className="h-8 sm:h-10 md:h-14 lg:h-[59.04px]" aria-hidden="true" />
      <TeamSection />
      <div className="h-16 sm:h-20 md:h-28 lg:h-[98.4px]" aria-hidden="true" />
      <TestimonialsSection />
      <Spacer size="d164" />
      <CTABannerSection />
    </main>
  );
}
