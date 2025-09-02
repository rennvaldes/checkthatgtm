
import ExpertsV2 from "./ExpertsV2";
import HeroV2 from "./HeroV2";
import HelpedGrowSection from "@/components/home-sections/v2/HelpedGrowSection";
import ResultsSection from "@/components/home-sections/v2/ResultsSection";
import SolutionsSection from "./SolutionsSection";

export default function PricingV2() {
  return (
    <div className="w-full">
      <HeroV2 />
      <HelpedGrowSection />
      <SolutionsSection />
      <ResultsSection />
      <ExpertsV2 />
    </div>
  );
}
