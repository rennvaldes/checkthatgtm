'use client';

import ArrowRight from '@/components/icons/ArrowRight';
import ChevronThick from '@/components/icons/ChevronThick';
import React from 'react';

// Chart SVG Component
function Chart() {
  return (
    <svg
      className='text-ui-blue absolute bottom-0 right-0 -z-10 h-[60px] w-[97px] lg:h-auto lg:w-auto'
      width='228'
      height='125'
      viewBox='0 0 228 125'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M50.7285 114.661C36.6821 110.56 22.206 122.388 2.46513 135.66L239.485 141.531L259.123 1.96286L237.719 1.43273C207.268 97.1693 141.903 103.693 102.96 98.5031C84.4062 96.0304 66.0565 119.136 50.7285 114.661Z'
        fill='url(#paint0_linear_287_2699)'
        stroke='#4400FF'
        strokeWidth='1.5'
      />
      <defs>
        <linearGradient
          id='paint0_linear_287_2699'
          x1='140.311'
          y1='33.495'
          x2='137.697'
          y2='139.01'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='currentColor' stopOpacity='0.3' />
          <stop offset='1' stopColor='currentColor' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Static Data
const staticData = {
  dropdown_text: 'Last Month',
  percentage: 142,
  legend_first_line: 'Increase in',
  legend_second_line: 'Signup requests',
};

function IncreasePercentageCard() {
  const { dropdown_text, percentage, legend_first_line, legend_second_line } = staticData;

  return (
    <div className='bg-ui-whitest absolute bottom-[69px] left-[23px] z-50 h-[85px] w-[118px] border-[1px] border-[#E5E7F1] pl-[8px] pt-[6.5px] lg:bottom-[113px] lg:left-auto lg:right-[583px] lg:h-[169px] lg:w-[249px] lg:px-[18.2px] lg:py-[14.5px]'>
      <div className='relative flex w-[65px] items-center lg:w-[80px]'>
        <p className='border-ui-black w-full appearance-none rounded-full border-[1px] border-opacity-[20%] px-[6px] py-[2px] text-[8px] lg:px-[9.5px] lg:py-[5.3px] lg:text-[10px]'>
          {dropdown_text}
        </p>
        <ChevronThick className='absolute right-[7px] mt-[1px] h-[11px] w-[11px]' />
      </div>
      <div className='mt-[3.5px] flex items-start gap-[3.5px] lg:mt-[8px] lg:gap-[8px]'>
        <h3>
          <span className='text-[24px] font-semibold leading-[23px] lg:text-[54px] lg:leading-[51px]'>
            {percentage}%
          </span>
          <br />
          <span className='font-elza text-normal block text-[8px] leading-[10px] lg:mt-[4px] lg:text-[12.6px] lg:leading-[16.4px]'>
            {legend_first_line} <br /> {legend_second_line}
          </span>
        </h3>
        <div className='bg-ui-green rounded-full bg-opacity-[12%] p-[5px] lg:mt-[6px]'>
          <ArrowRight className='text-ui-green h-[8px] w-[8px] -rotate-90 lg:h-[13.6px] lg:w-[13.6px]' />
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default IncreasePercentageCard;
