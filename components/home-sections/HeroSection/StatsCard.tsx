'use client';

import ArrowRight from '@/components/icons/ArrowRight';
import React from 'react';

// Hardcoded data derived from your database or mock values
const statsCardData = {
  title: 'Our Impact',
  stats: [
    { name: 'Revenue Growth', percentage: 45 },
    { name: 'Efficiency Improvement', percentage: 60 },
    { name: 'Market Expansion', percentage: 30 },
  ],
};

function StatsCard() {
  const { title, stats } = statsCardData;

  return (
    <div className='bg-ui-whitest absolute bottom-[34px] right-[13px] z-30 h-[83px] w-[110px] border-[1px] border-[#E5E7F1] p-[8.3px] lg:bottom-[14px] lg:right-[155px] lg:h-[176px] lg:w-[217.5px] lg:p-[17px]'>
      <h4 className='mb-[4.5px] text-[9.64px] font-semibold lg:mb-[9.6px] lg:text-[20.4px] lg:leading-[19.3px]'>
        {title}
      </h4>

      {stats.map(({ name, percentage }) => (
        <div
          key={name}
          className='border-ui-black flex h-[13.4px] items-center justify-between border-b-[1px] border-opacity-[20%] text-[6px] lg:h-[28.3px] lg:text-[11px]'>
          <p className='lg:leading-[12.1px]'>{name}</p>
          <div className='flex items-center justify-between'>
            <p className='text-ui-green font-medium leading-[12.1px]'>{percentage}%</p>
            <div className='bg-ui-green mb-[2px] ml-[3px] flex h-[8px] w-[8px] items-center justify-center rounded-full bg-opacity-[12%]'>
              <ArrowRight className='text-ui-green h-[6px] w-[6px] -rotate-90' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;
