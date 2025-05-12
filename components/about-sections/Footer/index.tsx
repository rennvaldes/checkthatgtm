'use client';

import planetEarthImage from '@/assets/img/planetEarth.webp';
import KitButton from '@/components/ui/KitButton';
import Image from 'next/image';
import BlackArrow from './BlackArrow';
import BlueCurve from './BlueCurve';
import DotPatternBackground from '@/components/ui/DotPatternBackground';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

export default function Footer() {
  const { isDesktop } = useResponsiveDevice();

  return (
    <section className='w-full lg:py-20 bg-ui-black '>
      {/* Banner */}
      <div className='pt-12 pl-4 relative flex flex-col z-[2] lg:flex-row lg:p-16 lg:h-[361px] lg:w-full lg:max-w-[1278px] lg:overflow-clip lg:mx-auto lg:mb-20'>
        <div>
          <h3 className='font-clash-display font-[500] text-[28px] lg:text-[52px] leading-[31px] lg:leading-[57px] tracking-normal'>
            Join Us
          </h3>
          <p className='font-elza font-[400] text-[16px] lg:text-[20px] leading-[150%] tracking-normal mt-3 max-w-[300px] lg:max-w-[700px]'>
            {
              "Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
            }
          </p>
          <KitButton
            className='mt-8 inline-flex'
            href='/careers'
            size='large'
            variant='primary'
            withAnimatedArrow='to-right'>
            See open positions
          </KitButton>
        </div>

        <div className='relative ml-auto w-[360px] h-[281px] lg:top-[16px] lg:left-[66px]'>
          <BlueCurve className='absolute bottom-0' />
          <BlackArrow className='absolute bottom-0' />
        </div>

        <DotPatternBackground
          className='bg-ui-peach'
          dotsColorStyle='bg-ui-grey/20'
          dotsSeparationPx={{ horizontal: 40, vertical: 42 }}
          dotWidthPxIncreasePerRow={0}
          dotPatternTopPaddingPx={20}
        />
      </div>

      {/* Earth Image */}
      <div className='h-[217px] relative lg:h-[323px] lg:-mb-20 overflow-clip'>
        <DotPatternBackground
          className='bg-ui-whitest z-[2]'
          dotsColorStyle='bg-ui-blue'
          dotsSeparationPx={isDesktop ? { horizontal: 66, vertical: 66 } : { horizontal: 31, vertical: 35 }}
          dotWidthPxIncreasePerRow={0}
          dotPatternTopPaddingPx={15}
        />
        <div className='from-ui-white to-ui-white/0 absolute top-0 left-0 h-full w-full bg-gradient-to-b z-[3]' />
        <Image
          className='absolute w-[238px] aspect-square -left-[120px] top-1/2 z-[3] lg:w-[428px] lg:top-[10%] lg:left-1/2 lg:-translate-x-1/2'
          src={planetEarthImage}
          alt='planet-earth'
        />
        <div className='absolute bg-ui-green-light w-[138px] lg:w-[313px] h-[43px] lg:h-[97px] rounded-bl-full top-[88%] -right-[6%] z-[3] lg:top-[initial] lg:bottom-0 lg:-right-[20px]' />
      </div>
    </section>
  );
}
