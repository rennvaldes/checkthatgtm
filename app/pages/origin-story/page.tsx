import Spacer from '@/components/common/Spacer';
import HeroSection from '@/components/pages-sections/origin-story/HeroSection';
import VideoSection from '@/components/pages-sections/origin-story/VideoSection';
import ProblemSection from '@/components/pages-sections/origin-story/ProblemSection';
import ProofPointSection from '@/components/pages-sections/origin-story/ProofPointSection';
import ScalingSection from '@/components/pages-sections/origin-story/ScalingSection';
import PatternSection from '@/components/pages-sections/origin-story/PatternSection';
import BreakthroughSection from '@/components/pages-sections/origin-story/BreakthroughSection';
import WorkshopsSection from '@/components/pages-sections/origin-story/WorkshopsSection';
import DifferenceSection from '@/components/pages-sections/origin-story/DifferenceSection';
import ResultsSection from '@/components/pages-sections/origin-story/ResultsSection';
import WhyItMattersSection from '@/components/pages-sections/origin-story/WhyItMattersSection';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export const metadata = {
  title: 'GrowthX Origin Story - Why We Built This (and Why It Works)',
  description: 'From burning a billion dollars on ads at IBM to building AI-powered content engines that actually compound value. The story of how GrowthX was born.',
};

export default function OriginStory() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <HeroSection />
      <Spacer size="d80" />
      <VideoSection />
      <Spacer size="d164" />
      <ProblemSection />
      <Spacer size="d164" />
      <ProofPointSection />
      <Spacer size="d164" />
      <ScalingSection />
      <Spacer size="d164" />
      <PatternSection />
      <Spacer size="d164" />
      <BreakthroughSection />
      <Spacer size="d164" />
      <WorkshopsSection />
      <Spacer size="d164" />
      <DifferenceSection />
      <Spacer size="d164" />
      <ResultsSection />
      <Spacer size="d164" />
      <WhyItMattersSection />
      <Spacer size="d122" />
      <CTABannerSection />
      <Spacer size="large" />
    </main>
  );
}
