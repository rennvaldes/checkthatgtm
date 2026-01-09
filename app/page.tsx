"use client";

import { useState } from "react";
import { HeroText, HeroLogos, HeroImage, HeresTheThing } from "@/components/home/hero";
import { PlatformFeaturesNew } from "@/components/home/platform/platformFeaturesNew";
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
import CheckThatLogo from "@/components/icons/CheckThatLogo";

export default function Home() {
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);

  return (
    <main className="overflow-hidden">
      <NavigationBar showBookButton={true} />
      <div className="md:hidden h-16 flex items-center pl-5">
        <CheckThatLogo className="h-[44px] w-auto" />
      </div>
      <HeroText />
      {/* <HeroLogos /> */}
      <HeroImage />
      <HeresTheThing onComplete={() => setIsManifestoComplete(true)} />
      {isManifestoComplete && (
        <>
          <PlatformFeaturesNew />
          {/* Hidden sections for CheckThat landing page */}
          {/* <PeopleRoot />
          <ProcessRoot />
          <ComparisonRoot />
          <FitRoot />
          <PricingRoot /> */}
          <CtaSection />
          <FooterCtaSection />
          <SitemapSection />
        </>
      )}
    </main>
  );
}
