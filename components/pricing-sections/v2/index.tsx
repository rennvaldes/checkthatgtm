
import ExpertsV2 from "./ExpertsV2";
import HeroV2 from "./HeroV2";
import HelpedGrowSection from "@/components/sections/HelpedGrowSection";
import ResultsSection from "@/components/sections/ResultsSection";
import SolutionsSection from "./SolutionsSection";
import Spacer from "@/components/common/Spacer";
import FormSection from "./FormSection";
import CTABannerSection from "@/components/about-sections/v2/CTABannerSection";

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
      <Spacer size="large"/>
      {/* <FormSection /> */}
      <CTABannerSection />
      {/* <Spacer size="large"/> */}
    </div>
  );
}
