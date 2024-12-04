'use client';

import React from 'react';
import Check from '../icons/Check';
import DotPatternBackground from '../ui/DotPatternBackground';
import X from '../icons/X';

function ServiceAsSoftware() {
  const comparisonData = {
    categories: [
      {
        title: 'Traditional SaaS',
        description: 'Tools and platforms that require your team to implement and manage.',
        characteristics: [
          'Self-service tools and dashboards',
          'Requires internal expertise',
          'Your team handles implementation',
          'Fixed features and workflows',
          'You manage the strategy',
          'Learning curve for your team',
          'Scalable but requires effort',
        ],
      },
      {
        title: 'Traditional Agency',
        description: 'Manual services delivered by teams of specialists with varying results.',
        characteristics: [
          'Human-delivered services',
          'Inconsistent quality',
          'Manual workflows',
          'Limited by human capacity',
          'High overhead costs',
          'Communication overhead',
          'Difficult to scale',
        ],
      },
      {
        title: 'Service-as-Software',
        description: 'AI-powered outcomes delivered through expert-guided workflows.',
        characteristics: [
          'Fully managed outcomes',
          'AI + Expert guidance',
          'Custom-built workflows',
          'Adapts to your needs',
          'Strategy handled for you',
          'Immediate value delivery',
          'Infinitely scalable',
        ],
      },
    ],
  };

  return (
    <section className='bg-ui-black text-ui-whitest relative mx-auto mt-[80px] flex w-full flex-col items-center px-[20px] pb-[40px] pt-[30px] lg:mt-[148px] lg:px-[40px] lg:pt-[90px]'>
      <DotPatternBackground
        dotsColorStyle='bg-ui-peach/50'
        dotPatternTopPaddingPx={5}
        dotsSeparationPx={{ vertical: 45, horizontal: 45 }}
        dotWidthPxIncreasePerRow={0}
        className='z-10 !h-[414px] overflow-hidden lg:!h-[450px]'
      />
      <div className='to-ui-black from-ui-black/0 absolute left-0 top-0 z-20 h-[420px] w-full bg-gradient-to-b lg:h-[460px]' />

      <h3 className='bg-ui-black relative z-30 w-[320px] text-center text-[20px] font-medium leading-[24px] lg:w-auto lg:max-w-[1280px] lg:text-[28px] lg:leading-[36px]'>
        <div>Beyond SaaS or Agencies</div>
        <span className='font-kepler-std text-ui-green-light text-[32px] italic lg:text-[56px] lg:leading-[60px] block mt-2'>
          AI Service-as-Software
        </span>
      </h3>

      <div className='mt-[40px] flex w-full flex-col gap-[20px] lg:mt-[64px] lg:max-w-[1280px] lg:flex-row lg:gap-[32px]'>
        {comparisonData.categories.map((category, index) => (
          <article
            key={index}
            className='bg-ui-black relative z-30 border-[1px] border-[#5F6382] px-[20px] py-[32px] lg:flex-1 lg:px-[32px] lg:py-[40px]'>
            <h4 className={`text-[20px] font-medium leading-[23px] lg:text-[24px] lg:leading-[28px] ${
              index === 2 ? 'text-ui-green-light' : 'text-ui-peach'
            }`}>
              {category.title}
            </h4>
            <p className='font-elza mt-[12px] text-[16px] font-normal leading-[24px] lg:mt-[20px]'>
              {category.description}
            </p>

            <div className='font-elza mt-[32px] flex flex-col gap-[16px]'>
              {category.characteristics.map((characteristic, charIndex) => (
                <div key={charIndex} className='flex gap-[12px]'>
                  {index === 2 ? (
                    <Check className='text-ui-green-light h-[24px] w-[16px] shrink-0' />
                  ) : (
                    <X className='text-ui-red h-[24px] w-[16px] shrink-0' />
                  )}
                  <h6 className='text-[16px] leading-[24px]'>{characteristic}</h6>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceAsSoftware;
