import HelpedGrowSection from "@/components/home-sections/HelpedGrowSection";
import HeroSection from "@/components/pricing-sections/HeroSection";

export default function Pricing() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <HelpedGrowSection />
    </main>
  );
}
