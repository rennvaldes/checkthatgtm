'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamic import of Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import balloon from '@/assets/img/balloon.png';
import X from '@/components/icons/X';

// Static Lottie Animation Data
import lottieAnimation1 from '@/assets/lottie/lottie1.json';
import lottieAnimation2 from '@/assets/lottie/lottie2.json';
import lottieAnimation3 from '@/assets/lottie/lottie3.json';

// Decorations
function Triangle() {
  return (
    <svg
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      className='text-ui-green absolute left-[153px] top-[928px] hidden lg:block'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M33 0L-1.44248e-06 33L33 33L33 0Z' fill='currentColor' />
    </svg>
  );
}

function ParallaxSection() {
  // Static text data
  const backgroundText = {
    line1: 'Elevate Your Business',
    line2: 'With Innovation',
    line2Colored: 'at Scale',
    line3: 'and Efficiency',
  };

  // Static Lottie configurations
  const lottieConfigs = [
    {
      animationData: lottieAnimation1,
      containerStyles:
        'bg-ui-black/40 absolute left-[14px] w-[165px] h-[186px] lg:left-[275px] top-[392px] lg:top-[455px] flex lg:h-[350px] lg:w-[310px] items-center justify-center text-xl',
    },
    {
      animationData: lottieAnimation2,
      containerStyles:
        'bg-ui-black/40 parallax-section-lottie-2 absolute w-[180px] h-[204px] right-[-15px] top-[776px] lg:right-0 lg:top-[948px] flex lg:h-[384px] lg:w-[340px] items-center justify-center text-xl',
    },
    {
      animationData: lottieAnimation3,
      containerStyles:
        'bg-ui-black/40 parallax-section-lottie-3 absolute bottom-[295px] lg:bottom-[408px] left-[-9px] w-[135px] h-[152px] lg:left-0 flex lg:h-[284px] lg:w-[252px] items-center justify-center text-xl',
    },
  ];

  return (
    <section id='parallax-section' className='relative z-20 mx-auto h-[1396px] w-[360px] lg:h-[1978px] lg:w-[1250px]'>
      {/* Sticky Background Text */}
      <h2 className='sticky top-0 mx-auto mt-[-200px] w-[320px] pb-[100px] pt-[290px] text-center text-[36px] font-medium leading-[40px] lg:mt-[-140px] lg:w-auto lg:pt-[310px] lg:text-[70px] lg:leading-[77px]'>
        {backgroundText.line1}
        <br />
        {backgroundText.line2}{' '}
        <span className='font-kepler-std text-ui-blue text-[42px] italic lg:mr-0 lg:text-[80px]'>
          {backgroundText.line2Colored}
        </span>
        <br className='hidden lg:block' /> {backgroundText.line3}
      </h2>

      {/* Lottie Animations */}
      {lottieConfigs.map((config, index) => (
        <div key={index} className={config.containerStyles}>
          <Lottie
            loop
            autoplay
            className='h-full w-full'
            animationData={config.animationData}
          />
        </div>
      ))}

      {/* Balloon Decoration */}
      <div className='absolute left-[122px] top-[557px] flex items-end justify-center lg:left-[515px] lg:top-[717px]'>
        <Image
          src={balloon}
          alt='A black and white air balloon'
          className='z-30 h-[115px] w-[116px] lg:h-[218px] lg:w-[219px]'
        />
        <div className='from-ui-peach to-ui-peach/0 absolute top-[42px] z-10 h-[185px] w-[81px] bg-gradient-to-b lg:top-[78px] lg:h-[348px] lg:w-[153px]' />
      </div>

      {/* Triangle and X Decorations */}
      <Triangle />
      <X className='text-ui-blue absolute right-[121px] top-[707px] hidden lg:block' />
      <X className='text-ui-blue absolute left-[527px] top-[1377px] hidden lg:block' />
    </section>
  );
}

export default ParallaxSection;
