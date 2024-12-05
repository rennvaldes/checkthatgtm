'use client';

import KitButton from '@/components/ui/KitButton';
import { cn } from '@/lib/litebox-lib/utils/cn';
import React from 'react';
import { motion } from 'framer-motion';

function TitleAndButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Static Title */}
      <h1 className='font-clash-display mx-auto max-w-[90%] text-center text-[36px] font-medium leading-[40px] lg:text-[70px] lg:leading-[77px]'>
        Expert-Led, AI&#8209;Powered&nbsp;
        <span className='font-kepler-std text-ui-blue text-[42px] italic lg:text-[80px]'>Growth</span>
      </h1>

      {/* Static Subtitle */}
      <h2 className='font-elza mx-auto mt-[8px] max-w-[90%] text-center text-[16px] font-normal leading-[24px] text-[#5F5D78] lg:mt-[4px] lg:mb-[10px] lg:text-[20px] lg:leading-[26px] lg:text-[#20233A]'>
        We build growth engines that blend AI workflows with experts. From content to distribution to conversion.
      </h2>

      {/* Buttons */}
      <div className='relative z-50 mt-[20px] flex w-full flex-col items-center justify-center gap-[8px] px-4 lg:mt-[30px] lg:w-auto lg:flex-row lg:px-0'>
        <KitButton
          scrollTo='parallax-section'
          size='large'
          variant='primary'
          className='w-[280px] lg:w-auto flex justify-center align-middle'
          withAnimatedArrow='to-bottom-right'>
          Explore
        </KitButton>
        <KitButton
          scrollTo='book-section'
          bgOverlayStyles='bg-ui-white'
          className='w-[280px] bg-ui-white lg:w-auto'
          size='large'
          variant='outline'>
          Talk to a strategist
        </KitButton>
      </div>
    </motion.div>
  );
}

export default TitleAndButtons;
