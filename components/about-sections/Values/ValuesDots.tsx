'use client';

import DotPatternBackground from '@/components/ui/DotPatternBackground';

export default function ValuesDots() {
  return (
    <DotPatternBackground
      className='hidden lg:flex !static mt-[133px] pl-0'
      dotsColorStyle='bg-ui-peach'
      dotsSeparationPx={{ horizontal: 55, vertical: 78 }}
      dotWidthPxIncreasePerRow={0.1}
      dotPatternTopPaddingPx={-1200}
    />
  );
}
