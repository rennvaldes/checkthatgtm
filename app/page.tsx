'use client';

// import BookSection from '@/components/home-sections/BookSection';
import HelpedGrowSection from '@/components/home-sections/HelpedGrowSection';
import HeroSection from '@/components/home-sections/HeroSection';
import HeroVideoSection from '@/components/home-sections/HeroVideoSection';
// import HowItWorksSection from '@/components/home-sections/HowItWorksSection';
import ParallaxSection from '@/components/home-sections/ParallaxSection';
// import PricingSection from '@/components/home-sections/PricingSection';
// import ResultsSection from '@/components/home-sections/ResultsSection';
// import ReviewsSection from '@/components/home-sections/ReviewsSection';
// import WhoWeAreForSection from '@/components/home-sections/WhoWeAreForSection';
// import FaqSection from '@/components/home-sections/FaqSection';
// import EarthSection from '@/components/home-sections/EarthSection';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between'>
      <HeroSection />
      <HelpedGrowSection />
      <HeroVideoSection />
      <ParallaxSection />
      {/* <ResultsSection /> */}
      {/* <WhoWeAreForSection /> */}
      {/* <HowItWorksSection /> */}
      {/* <ReviewsSection /> */}
      {/* <PricingSection /> */}
      {/* <BookSection /> */}
      {/* <FaqSection /> */}
      {/* <EarthSection /> */}
    </main>
  );
}
