'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Dynamic import of Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import balloon from '@/assets/img/balloon.png';
import X from '@/components/icons/X';

// Static Lottie Animation Data
import lottieAnimation1 from '@/assets/lottie/lottie1.json';
import lottieAnimation2 from '@/assets/lottie/lottie2.json';
import lottieAnimation3 from '@/assets/lottie/lottie3.json';
import Triangle from '../icons/Triangle';

function ParallaxSection() {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Adjust scroll triggers to show Lottie animations earlier
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const text2Opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const text3Opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const lottieOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]); // Start fading in during the third text

  // Update Lottie positions by adjusting the top/bottom values in containerStyles
  const lottieConfigs = [
    {
      animationData: lottieAnimation1,
      containerStyles:
        'bg-ui-black/40 absolute left-[5%] w-[165px] h-[186px] lg:left-[22%] top-[292px] lg:top-[355px] flex lg:h-[350px] lg:w-[310px] items-center justify-center text-xl',
    },
    {
      animationData: lottieAnimation2,
      containerStyles:
        'bg-ui-black/40 parallax-section-lottie-2 absolute w-[180px] h-[204px] right-[5%] top-[676px] lg:right-[5%] lg:top-[848px] flex lg:h-[384px] lg:w-[340px] items-center justify-center text-xl',
    },
    {
      animationData: lottieAnimation3,
      containerStyles:
        'bg-ui-black/40 parallax-section-lottie-3 absolute bottom-[395px] lg:bottom-[508px] left-[5%] w-[135px] h-[152px] lg:left-[5%] flex lg:h-[284px] lg:w-[252px] items-center justify-center text-xl',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id='parallax-section'
      className='relative z-20 mx-auto min-h-[1396px] w-full max-w-[1250px] px-4 lg:min-h-[1978px]'
    >
      <h2 className='sticky top-0 mx-auto mt-[-200px] w-full max-w-[320px] pb-[100px] pt-[290px] text-center font-medium sm:w-[400px] lg:mt-[-140px] lg:w-auto lg:max-w-none lg:pt-[310px]'>
        <motion.div
          style={{ opacity: text1Opacity }}
          className="will-change-opacity mb-2 text-[32px] leading-[1.1] sm:text-[36px] lg:mb-4 lg:text-[70px] lg:leading-[77px]"
        >
          AI falls short.
        </motion.div>

        <motion.div
          style={{ opacity: text2Opacity }}
          className="will-change-opacity mb-2 text-[32px] leading-[1.1] sm:text-[36px] lg:mb-4 lg:text-[70px] lg:leading-[77px]"
        >
          Experts don&apos;t scale.
        </motion.div>

        <motion.div
          style={{ opacity: text3Opacity }}
          className="will-change-opacity text-[32px] leading-[1.1] sm:text-[36px] lg:text-[70px] lg:leading-[77px]"
        >
          <span className="block lg:inline">Together:</span>
          <div className="inline-flex flex-wrap items-baseline mt-1 lg:mt-0 lg:inline">
            <span className='font-kepler-std text-ui-blue text-[38px] italic sm:text-[42px] lg:text-[80px]'>
              Growth
            </span>
            <span className="leading-none">&nbsp;Flywheel</span>
          </div>
        </motion.div>
      </h2>

      {/* Lottie Animations */}
      {lottieConfigs.map((config, index) => (
        <motion.div
          key={index}
          className={config.containerStyles}
          style={{ opacity: lottieOpacity }}
        >
          <Lottie
            loop
            autoplay={true}
            className='h-full w-full'
            animationData={config.animationData}
          />
        </motion.div>
      ))}

      {/* Balloon Decoration */}
      {/* <div className='absolute left-[122px] top-[557px] flex items-end justify-center lg:left-[515px] lg:top-[717px]'>
        <Image
          src={balloon}
          alt='A black and white air balloon'
          className='z-30 h-[115px] w-[116px] lg:h-[218px] lg:w-[219px]'
        />
        <div className='from-ui-peach to-ui-peach/0 absolute top-[42px] z-10 h-[185px] w-[81px] bg-gradient-to-b lg:top-[78px] lg:h-[348px] lg:w-[153px]' />
      </div> */}

      {/* Triangle and X Decorations */}
      <Triangle className='text-ui-green absolute left-[153px] top-[928px] hidden lg:block' />
      <X className='text-ui-blue absolute right-[121px] top-[707px] hidden lg:block' />
      <X className='text-ui-blue absolute left-[527px] top-[1377px] hidden lg:block' />
    </section>
  );
}

export default ParallaxSection;
