import HelpedGrowSection from "@/components/home-sections/HelpedGrowSection";
import HeroSection from "@/components/pricing-sections/HeroSection";
import WorkstreamsSection from "@/components/pricing-sections/WorkstreamsSection";

export default function Pricing() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between">
      <HeroSection />
      <HelpedGrowSection />
      <WorkstreamsSection />
    </main>
  );
}
