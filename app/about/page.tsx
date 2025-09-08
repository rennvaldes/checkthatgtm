import HeroSectionv2 from '@/components/about-sections/v2/HeroSection';
import CompanySection from '@/components/about-sections/v2/CompanySection';
import Spacer from '@/components/common/Spacer';
import ValuesSection from '@/components/about-sections/v2/ValuesSection';
import TeamSection from '@/components/about-sections/v2/TeamSection';
import TestimonialsSection from "@/components/home-sections/v2/TestimonialsSection";
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <HeroSectionv2 />
      <Spacer size="d164" />
      <CompanySection />
      <Spacer size="d164" />
      <ValuesSection />
      <Spacer size="d164" />
      <TeamSection />
      <Spacer size="d164" />
      <TestimonialsSection />
      <Spacer size="d164" />
      <CTABannerSection />
    </main>
  );
}
