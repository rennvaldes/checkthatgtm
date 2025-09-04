"use client";

import HeroSectionv2 from "@/components/home-sections/v2/HeroSection";
import HelpedGrowSection2 from "@/components/home-sections/v2/HelpedGrowSection";
import CaseStudySection from "@/components/home-sections/v2/CaseStudySection";
import ServiceAsSoftware2 from "@/components/home-sections/v2/ServiceAsSoftware";
import HowItWorksSection2 from "@/components/home-sections/v2/HowItWorksSection";
import ResultsSection2 from "@/components/home-sections/v2/ResultsSection";
import PricingSection2 from "@/components/home-sections/v2/PricingSection";
import BannerSection from "@/components/home-sections/v2/BannerSection";
import TestimonialsSection from "@/components/home-sections/v2/TestimonialsSection";
const HeroVideoSection = dynamic(
  () => import("@/components/home-sections/HeroVideoSection"),
  { ssr: true }
);
const ParallaxSection = dynamic(
  () => import("@/components/home-sections/ParallaxSection"),
  { ssr: true }
);
import ResultsSection from "@/components/home-sections/ResultsSection";
import WhoWeAreForSection from "@/components/home-sections/WhoWeAreForSection";
import HowItWorksSection from "@/components/home-sections/HowItWorksSection";
import ReviewsSection from "@/components/home-sections/ReviewsSection";
// import PricingSection from "@/components/home-sections/PricingSection";
// import { FaqSectionHomepage } from '@/components/home-sections/FaqSection';
import FaqContentLayoutSection from "@/components/home-sections/v2/FaqContentLayoutSection";
import EarthSection from "@/components/home-sections/EarthSection";
import ServiceAsSoftware from "@/components/home-sections/ServiceAsSoftware";
import CustomPlans from "@/components/home-sections/CustomPlans"

import dynamic from "next/dynamic";
import Spacer from "@/components/common/Spacer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122"/>
      <HeroSectionv2 />
      <Spacer size="d122"/>
      <HelpedGrowSection2 />
      <Spacer size="d122"/>
      <CaseStudySection />
      <Spacer size="d122"/>
      <ServiceAsSoftware2 />
      <Spacer size="d122"/>
      <HowItWorksSection2 />
      <Spacer size="d122"/>
      <ResultsSection2 />
      <Spacer size="d122"/>
      <PricingSection2 />
      <Spacer size="d122"/>
      <BannerSection />
      <Spacer size="d122"/>
      <FaqContentLayoutSection />
      <Spacer size="d122"/>
      <TestimonialsSection />
      <Spacer size="large"/>
    </main>
  );
}
