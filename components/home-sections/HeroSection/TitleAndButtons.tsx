'use client';

import KitButton from '@/components/ui/KitButton';
import { cn } from '@/lib/litebox-lib/utils/cn';
import React from 'react';

function TitleAndButtons() {
  // Static data
  const title_left = 'AI-Powered';
  const title_right = 'Growth';
  const sub_title = 'Systematic growth with expert-guided AI workflows.';
  const left_button = 'Explore';
  const right_button = 'Talk to a strategist';

  return (
    <>
      {/* Static Title */}
      <h1 className='font-clash-display mx-auto w-[300px] text-center text-[36px] font-medium leading-[40px] lg:w-auto lg:text-[70px] lg:leading-[77px]'>
        {title_left}{' '}
        <span className='font-kepler-std text-ui-blue text-[42px] italic lg:text-[80px]'>{title_right}</span>
      </h1>

      {/* Static Subtitle */}
      <h2 className='font-elza mx-auto mt-[8px] w-[320px] text-center text-[16px] font-normal leading-[24px] text-[#5F5D78] lg:mt-[4px] lg:w-auto lg:text-[20px] lg:leading-[26px] lg:text-[#20233A]'>
        {sub_title}
      </h2>

      {/* Buttons */}
      <div className='relative z-50 mt-[20px] flex flex-col items-center justify-center gap-[8px] lg:mt-[30px] lg:flex-row'>
        <KitButton
          scrollTo='video-section'
          size='large'
          variant='primary'
          withAnimatedArrow='to-bottom-right'>
          {left_button}
        </KitButton>
        <KitButton
          scrollTo='book-section'
          bgOverlayStyles='bg-ui-white'
          className='bg-ui-white'
          size='large'
          variant='outline'>
          {right_button}
        </KitButton>
      </div>
    </>
  );
}

export default TitleAndButtons;
