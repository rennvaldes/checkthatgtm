import Spacer from '@/components/common/Spacer';
import HeroSection from '@/components/pages-sections/learn/winning-content-strategy/HeroSection';
import VideoSection from '@/components/pages-sections/learn/winning-content-strategy/VideoSection';
import ProblemSection from '@/components/pages-sections/learn/winning-content-strategy/ProblemSection';
import ThreeAngleFrameworkSection from '@/components/pages-sections/learn/winning-content-strategy/ThreeAngleFrameworkSection';
import Angle1Section from '@/components/pages-sections/learn/winning-content-strategy/Angle1Section';
import Angle2Section from '@/components/pages-sections/learn/winning-content-strategy/Angle2Section';
import Angle3Section from '@/components/pages-sections/learn/winning-content-strategy/Angle3Section';
import OverlapSection from '@/components/pages-sections/learn/winning-content-strategy/OverlapSection';
import ExecutionSystemSection from '@/components/pages-sections/learn/winning-content-strategy/ExecutionSystemSection';
import PrioritizationSection from '@/components/pages-sections/learn/winning-content-strategy/PrioritizationSection';
import ShotsOnGoalSection from '@/components/pages-sections/learn/winning-content-strategy/ShotsOnGoalSection';
import OnePercentRuleSection from '@/components/pages-sections/learn/winning-content-strategy/OnePercentRuleSection';
import AlgorithmVsHumansSection from '@/components/pages-sections/learn/winning-content-strategy/AlgorithmVsHumansSection';
import CompoundingAssetSection from '@/components/pages-sections/learn/winning-content-strategy/CompoundingAssetSection';
import GrowthXApplicationSection from '@/components/pages-sections/learn/winning-content-strategy/GrowthXApplicationSection';
import NextStepsSection from '@/components/pages-sections/learn/winning-content-strategy/NextStepsSection';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export const metadata = {
  title: 'Creating a Winning Content Strategy - Framework for Growth | GrowthX',
  description: 'Learn the three-angle framework we use to build content engines that drive organic growth. Understand audience, competition, and jobs-to-be-done.',
};

export default function WinningContentStrategy() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <HeroSection />
      <Spacer size="d80" />
      <VideoSection />
      <Spacer size="d164" />
      <ProblemSection />
      <Spacer size="d164" />
      <ThreeAngleFrameworkSection />
      <Spacer size="d164" />
      <Angle1Section />
      <Spacer size="d164" />
      <Angle2Section />
      <Spacer size="d164" />
      <Angle3Section />
      <Spacer size="d164" />
      <OverlapSection />
      <Spacer size="d164" />
      <ExecutionSystemSection />
      <Spacer size="d164" />
      <PrioritizationSection />
      <Spacer size="d164" />
      <ShotsOnGoalSection />
      <Spacer size="d164" />
      <OnePercentRuleSection />
      <Spacer size="d164" />
      <AlgorithmVsHumansSection />
      <Spacer size="d164" />
      <CompoundingAssetSection />
      <Spacer size="d164" />
      <GrowthXApplicationSection />
      <Spacer size="d164" />
      <NextStepsSection />
      <Spacer size="d122" />
      <CTABannerSection />
      <Spacer size="large" />
    </main>
  );
}
