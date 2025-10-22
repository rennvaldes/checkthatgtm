import Spacer from '@/components/common/Spacer';
import HeroSection from '@/components/pages-sections/learn/how-we-work/HeroSection';
import VideoSection from '@/components/pages-sections/learn/how-we-work/VideoSection';
import TwoPhaseApproachSection from '@/components/pages-sections/learn/how-we-work/TwoPhaseApproachSection';
import Phase1OverviewSection from '@/components/pages-sections/learn/how-we-work/Phase1OverviewSection';
import Phase1ChoiceSection from '@/components/pages-sections/learn/how-we-work/Phase1ChoiceSection';
import Phase1DeliverablesSection from '@/components/pages-sections/learn/how-we-work/Phase1DeliverablesSection';
import Phase2ExecutionSection from '@/components/pages-sections/learn/how-we-work/Phase2ExecutionSection';
import Phase2TeamSection from '@/components/pages-sections/learn/how-we-work/Phase2TeamSection';
import WhyTwoPhasesSection from '@/components/pages-sections/learn/how-we-work/WhyTwoPhasesSection';
import PricingSection from '@/components/pages-sections/learn/how-we-work/PricingSection';
import FAQSection from '@/components/pages-sections/learn/how-we-work/FAQSection';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export const metadata = {
  title: 'How We Work - The GrowthX Process | GrowthX',
  description: 'Discover how GrowthX works. Two-phase approach with Strategy Sprint and Growth Execution. De-risked, transparent, and designed for real results.',
};

export default function HowWeWork() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <HeroSection />
      <Spacer size="d80" />
      <VideoSection />
      <Spacer size="d164" />
      <TwoPhaseApproachSection />
      <Spacer size="d164" />
      <Phase1OverviewSection />
      <Spacer size="d164" />
      <Phase1ChoiceSection />
      <Spacer size="d164" />
      <Phase1DeliverablesSection />
      <Spacer size="d164" />
      <Phase2ExecutionSection />
      <Spacer size="d164" />
      <Phase2TeamSection />
      <Spacer size="d164" />
      <WhyTwoPhasesSection />
      <Spacer size="d164" />
      <PricingSection />
      <Spacer size="d164" />
      <FAQSection />
      <Spacer size="d122" />
      <CTABannerSection />
      <Spacer size="large" />
    </main>
  );
}
