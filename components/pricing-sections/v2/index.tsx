
import ExpertsV2 from "./ExpertsV2";
import HeroV2 from "./HeroV2";
import HelpedGrowSection from "@/components/home-sections/v2/HelpedGrowSection";
import ResultsSection from "@/components/home-sections/v2/ResultsSection";
import SolutionsSection from "./SolutionsSection";
import Spacer from "@/components/common/Spacer";

export default function PricingV2() {
  return (
    <div className="w-full">
      <Spacer size="d122"/>
      <HeroV2 />
      <Spacer size="d122"/>
      <HelpedGrowSection />
      <Spacer size="d164"/>
      <SolutionsSection />
      <Spacer size="d164"/>
      <ResultsSection />
      <Spacer size="d164"/>
      <ExpertsV2 />
    </div>
  );
}
