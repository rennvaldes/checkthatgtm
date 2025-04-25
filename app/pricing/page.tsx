"use client";

import EarthSection from "@/components/home-sections/EarthSection";
import HelpedGrowSection from "@/components/home-sections/HelpedGrowSection";
import ResultsSection from "@/components/home-sections/ResultsSection";
import ComparisonSection from "@/components/pricing-sections/ComparisonSection";
import ExpertsSection from "@/components/pricing-sections/ExpertsSection";
import HeroSection from "@/components/pricing-sections/HeroSection";
import WorkstreamsSection from "@/components/pricing-sections/WorkstreamsSection";
import ServiceAsSoftware from "@/components/home-sections/ServiceAsSoftware";
import FaqSection from '@/components/home-sections/FaqSection';

export default function Pricing() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between">
      <HeroSection />
      <HelpedGrowSection />
      <WorkstreamsSection />
      <ExpertsSection />
      <ServiceAsSoftware />
      <ResultsSection />
      <FaqSection />
      <EarthSection />
    </main>
  );
}
