import HeroSectionv2 from '@/components/about-sections/v2/HeroSection';
import CompanySection from '@/components/about-sections/v2/CompanySection';
import Spacer from '@/components/common/Spacer';
import ValuesSection from '@/components/about-sections/v2/ValuesSection';
import TeamSection from '@/components/about-sections/v2/TeamSection';
import TestimonialsSection from '@/components/about-sections/v2/TestimonialsSection';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <HeroSectionv2 />
      <Spacer size="xl" />
      <CompanySection />
      <Spacer size="xl" />
      <ValuesSection />
      <Spacer size="xl" />
      <TeamSection />
      <Spacer size="xl" />
      <TestimonialsSection />
      <Spacer size="xl" />
      <CTABannerSection />
    </main>
  );
}
