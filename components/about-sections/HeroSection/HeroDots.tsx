'use client';

import DotPatternBackground from '@/components/ui/DotPatternBackground';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

export default function HeroDots() {
  const { isDesktop } = useResponsiveDevice();

  return (
    <DotPatternBackground
      className='z-[2]'
      dotsSeparationPx={{ horizontal: 55, vertical: 78 }}
      dotWidthPxIncreasePerRow={0}
      dotPatternTopPaddingPx={isDesktop ? 280 : 350}
    />
  );
}
