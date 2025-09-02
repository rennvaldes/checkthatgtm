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
import { FaqSectionHomepage } from '@/components/home-sections/FaqSection';
import EarthSection from "@/components/home-sections/EarthSection";
import ServiceAsSoftware from "@/components/home-sections/ServiceAsSoftware";
import CustomPlans from "@/components/home-sections/CustomPlans"

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <HeroSectionv2 />
      <HelpedGrowSection2 />
      <CaseStudySection />
      <ServiceAsSoftware2 />
      <HowItWorksSection2 />
      <ResultsSection2 />
      <PricingSection2 />
      <BannerSection />
      <TestimonialsSection />
    </main>
  );
}
