import React from 'react';
import Image from 'next/image';

import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import DotPatternBackground from '../ui/DotPatternBackground';
import planetEarthImage from '@/assets/img/planetEarth.webp';

function DesktopDecorations() {
  return (
    <svg width="232" height="97" viewBox="0 0 185 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-8.48001e-06 3.05176e-05C-3.79663e-06 53.5716 43.4284 97 97 97L313 97L313 3.15425e-06L-8.48001e-06 3.05176e-05Z" fill="#33FF9D" />
    </svg>
  );
}

function MobileDecorations() {
  return (
    <svg width="49" height="43" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-3.75918e-06 1.14441e-05C-1.68304e-06 23.7483 19.2518 43 43 43L138 43L138 -6.20251e-07L-3.75918e-06 1.14441e-05Z" fill="#33FF9D"/>
    </svg>
  );
}

function EarthSection() {
  const { isDesktop } = useResponsiveDevice();

  return (
    <section className='relative w-full h-[335px]'>
      <DotPatternBackground
        className='relative -z-40 h-[335px]'
        dotsSeparationPx={{ vertical: isDesktop ? 66 : 40, horizontal: isDesktop ? 66 : 40 }}
        dotPatternTopPaddingPx={isDesktop ? 10 : 30}
        dotWidthPxIncreasePerRow={0}
      />

      <div className='from-ui-white to-ui-white/0 absolute left-0 top-0 h-full w-full bg-gradient-to-b -z-30' />
      <div className='relative mx-auto lg:h-full w-full'>
        <Image
          alt='Planet Earth'
          className='absolute lg:left-1/2 left-[6%] transform -translate-x-1/2 lg:-translate-y-1/2 -translate-y-[58%] w-[238px] lg:w-[428px] -z-20'
          src={planetEarthImage}
        />
        <div className="absolute right-0 -top-[74px] lg:-top-[97px] -z-30">
          {isDesktop ? <DesktopDecorations /> : <MobileDecorations />}
          <div className='bg-black mx-auto h-[2px] lg:w-[40vw] w-[80vw] absolute -left-413 lg:bottom-[51px] bottom-[20px] lg:right-[223px] right-[58px]' />
        </div>
      </div>
    </section>
  );
}

export default EarthSection;
