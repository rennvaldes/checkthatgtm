import { HeroText, HeroLogos } from "@/components/home/hero";
import { PlatformFeatures } from "@/components/home/platform";
import { PeopleRoot } from "@/components/home/people";
import { ProcessRoot } from "@/components/home/process/processRoot";
import { ComparisonRoot } from "@/components/home/comparison";
import { FitRoot } from "@/components/home/fit";
import { PricingRoot } from "@/components/home/pricing";
import {
  CtaSection,
  FooterCtaSection,
  SitemapSection,
} from "@/components/home/footer";
import { NavigationBar } from "@/components/navigation/navigationBar";
import Logo from "@/components/icons/Logo";

export default function Home() {
  return (
    <main>
      <NavigationBar showBookButton={false} />
      <div className="md:hidden h-16 flex items-center pl-5">
        <Logo className="h-[20px] w-auto" />
      </div>
      <HeroText />
      <HeroLogos />
      {/* <HeroVideo /> */}
      <PlatformFeatures />
      <PeopleRoot />
      <ProcessRoot />
      <ComparisonRoot />
      <FitRoot />
      <PricingRoot />
      <CtaSection />
      <FooterCtaSection />
      <SitemapSection />
    </main>
  );
}
