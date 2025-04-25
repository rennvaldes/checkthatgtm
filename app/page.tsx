"use client";

import HeroSection from "@/components/home-sections/HeroSection";
import HelpedGrowSection from "@/components/home-sections/HelpedGrowSection";
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
import PricingSection from "@/components/home-sections/PricingSection";
import BookSection from "@/components/home-sections/BookSection";
import { FaqSectionHomepage } from '@/components/home-sections/FaqSection';
import EarthSection from "@/components/home-sections/EarthSection";
import ServiceAsSoftware from "@/components/home-sections/ServiceAsSoftware";

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <HelpedGrowSection />
      {/* <HeroVideoSection /> */}
      <ParallaxSection />
      <ResultsSection />
      {/* <WhoWeAreForSection /> */}
      <ServiceAsSoftware />
      <HowItWorksSection />
      <ReviewsSection />
      {/*     <PricingSection /> */}
      <BookSection />
      <FaqSectionHomepage />
      <EarthSection />
    </main>
  );
}
