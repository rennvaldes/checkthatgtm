import { AboutHero } from "@/components/about/aboutHero";
import { AboutValues } from "@/components/about/aboutValues";
import { AboutFounders } from "@/components/about/aboutFounders";
import { AboutTeamMap } from "@/components/about/aboutTeamMap";
import { CtaSection } from "@/components/home/footer/ctaSection";
import VisualHero from "@/components/about-sections/v2/VisualHero";
import Logo from "@/components/icons/Logo";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="md:hidden h-16 flex items-center pl-5">
        <Logo className="h-[20px] w-auto" />
      </div>
      <AboutHero />
      <div className="h-9 sm:h-12 md:h-18 lg:h-[73.8px]" aria-hidden="true" />
      <VisualHero />
      <div className="h-8 sm:h-10 md:h-14 lg:h-[59.04px]" aria-hidden="true" />
      <AboutValues />
      <AboutFounders />
      <AboutTeamMap />
      <CtaSection variant="careers" />
    </main>
  );
}
