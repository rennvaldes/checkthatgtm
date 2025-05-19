import DotPatternBackground from '@/components/ui/DotPatternBackground';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

import TitleAndButtons from './TitleAndButtons';
import DecorationsAndContainer from './DecorationsAndContainer';
import IncreasePercentageCard from './IncreasePercentageCard';
import StatsCard from './StatsCard';
import HeroAnnouncement from '@/components/ui/HeroAnnouncement';

function HeroSection() {
  const { isDesktop } = useResponsiveDevice();

  return (
    <section className='relative mt-20 w-full overflow-hidden lg:mt-[6.5rem]'>
      <DotPatternBackground
        dotStartingWidthPx={!isDesktop ? 1 : undefined}
        dotWidthPxIncreasePerRow={!isDesktop ? 0.3 : undefined}
        dotsSeparationPx={!isDesktop ? { vertical: 40, horizontal: 42 } : undefined}
        dotPatternTopPaddingPx={!isDesktop ? 140 : undefined}
      />
      <HeroAnnouncement text="👋 We raised $12M to combine AI with human-expertise" link="/blog/series-a" />
      <TitleAndButtons />
      <DecorationsAndContainer>
        <IncreasePercentageCard />
        <StatsCard />
      </DecorationsAndContainer>
      <div className='hero-separator-color mx-auto h-[1px] w-[98%] lg:w-[90%]' />
    </section>
  );
}

export default HeroSection;
