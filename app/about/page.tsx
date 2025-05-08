import Company from '@/components/about-sections/Company';
import HeroSection from '@/components/about-sections/HeroSection';
import Values from '@/components/about-sections/Values';
import { Main } from '@/components/ui/Main';

export default function About() {
  return (
    <Main>
      <HeroSection />
      <Company />
      <Values />
    </Main>
  );
}
