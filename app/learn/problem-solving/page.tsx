import Spacer from '@/components/common/Spacer';
import HeroSection from '@/components/pages-sections/learn/problem-solving/HeroSection';
import VideoSection from '@/components/pages-sections/learn/problem-solving/VideoSection';
import ContentDeathMarchSection from '@/components/pages-sections/learn/problem-solving/ContentDeathMarchSection';
import AlternativesFailSection from '@/components/pages-sections/learn/problem-solving/AlternativesFailSection';
import RealProblemsSection from '@/components/pages-sections/learn/problem-solving/RealProblemsSection';
import WhatWeBuiltSection from '@/components/pages-sections/learn/problem-solving/WhatWeBuiltSection';
import DifferenceComparisonSection from '@/components/pages-sections/learn/problem-solving/DifferenceComparisonSection';
import WhyThisWorksSection from '@/components/pages-sections/learn/problem-solving/WhyThisWorksSection';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export const metadata = {
  title: 'The Problem We\'re Solving - Why Content Engines Fail | GrowthX',
  description: 'Discover why most companies fail at building content engines and what we built instead. The real reason the traditional approach doesn\'t scale.',
};

export default function ProblemsSolving() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <HeroSection />
      <Spacer size="d80" />
      <VideoSection />
      <Spacer size="d164" />
      <ContentDeathMarchSection />
      <Spacer size="d164" />
      <AlternativesFailSection />
      <Spacer size="d164" />
      <RealProblemsSection />
      <Spacer size="d164" />
      <WhatWeBuiltSection />
      <Spacer size="d164" />
      <DifferenceComparisonSection />
      <Spacer size="d164" />
      <WhyThisWorksSection />
      <Spacer size="d122" />
      <CTABannerSection />
      <Spacer size="large" />
    </main>
  );
}
