import Company from '@/components/about-sections/Company';
import Footer from '@/components/about-sections/Footer';
import HeroSection from '@/components/about-sections/HeroSection';
import Statement from '@/components/about-sections/Statement';
import Testimonials from '@/components/about-sections/Testimonials';
import Values from '@/components/about-sections/Values';
import { Main } from '@/components/ui/Main';

export default function About() {
  return (
    <Main>
      <HeroSection />
      <Company />
      <Values />
      <Statement />
      <Testimonials />
      <Footer />
    </Main>
  );
}
