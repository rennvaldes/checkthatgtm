import { HeroText, HeroLogos } from "@/components/home/hero";
import { PlatformFeatures } from "@/components/home/platform";
import { PeopleRoot } from "@/components/home/people";
import { ProcessRoot } from "@/components/home/process/processRoot";
import { ComparisonRoot } from "@/components/home/comparison";
import { FitRoot } from "@/components/home/fit";
import { PricingRoot } from "@/components/home/pricing";
import { NavigationBar, CtaSection, FooterCtaSection, SitemapSection } from "@/components/home/footer";

export default function Home() {
  return (
    <main>
      <NavigationBar />
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
