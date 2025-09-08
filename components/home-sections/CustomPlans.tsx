'use client';

import React, { useEffect, useState } from 'react';
import DotPatternBackground from '../ui/DotPatternBackground';
import Check from '../icons/Check';

import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import KitButton from '../ui/KitButton';
import { trackDemoBookingClick } from '@/lib/utils/posthog-tracking';

const customPlans = {
  categories: [
    {
      title: 'Content',
      description: 'Create valuable assets.',
      characteristics: [
        'AEO: Increase referrals and mentions',
        'Editorial Content: Multiply organic traffic',
        'Programmatic SEO: Scale topic coverage',
        'Content Refresh: Boost existing rankings',
      ],
    },
    {
      title: 'Distribute',
      description: 'Amplify your reach',
      characteristics: ['Link Building: Elevate domain authority', 'Social Media: Grow engaged audience'],
    },
    {
      title: 'Convert',
      description: 'Transform attention into revenue',
      characteristics: [
        'Paid Media: Optimize acquisition costs',
        'Conversion Rate Optimization: Maximize conversion rates',
        'Gated Content: Generate qualified leads',
        'Outbound Sales: Book qualified meetings',
      ],
    },
  ],
};

function LineDecoMobile() {
  return (
    <svg
      className='text-ui-blue absolute -top-1 left-0 z-0'
      width='162'
      height='359'
      viewBox='0 0 162 359'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M-256 3L30.7274 3C56.6355 3 77.6382 24.0026 77.6382 49.9107V56.1404C77.6382 78.6079 95.8516 96.8214 118.319 96.8214V96.8214C140.787 96.8214 159 115.035 159 137.502V359'
        stroke='currentColor'
        strokeWidth='6'
      />
    </svg>
  );
}

function LineDecoDesktop() {
  return (
    <svg
      className='absolute -top-1 left-0 z-0'
      width='509'
      height='676'
      viewBox='0 0 509 676'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M-277 4H114.949C163.855 4 203.5 43.6454 203.5 92.5505V92.5505C203.5 141.456 243.145 181.101 292.051 181.101H354.25C437.507 181.101 505 248.594 505 331.851V676'
        stroke='url(#paint0_linear_560_24085)'
        strokeWidth='8'
      />
      <defs>
        <linearGradient
          id='paint0_linear_560_24085'
          x1='-207'
          y1='-6.49999'
          x2='191.5'
          y2='94'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#4400FF' stopOpacity='0' />
          <stop offset='1' stopColor='#4400FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HalfCircleDeco() {
  return (
    <svg
      className='text-ui-blue absolute right-0 top-[111px] z-0 lg:top-[263px] lg:h-[50px] lg:w-[100px]'
      width='58'
      height='29'
      viewBox='0 0 58 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 6.91643e-07C1.90992e-07 16.0163 12.9837 29 29 29C45.0163 29 58 16.0163 58 0L0 6.91643e-07Z'
        fill='currentColor'
      />
    </svg>
  );
}

function CustomPlans() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    if (head) head.appendChild(script);
  }, []);

  const [openSection, setOpenSection] = useState<string>('Content');

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? '' : section));
  };

  return (
    <section
      className='bg-ui-black text-ui-whitest relative mx-auto mt-[80px] flex w-full flex-col items-center px-[20px] pb-[60px] pt-[30px] lg:mt-[148px] lg:px-[40px] lg:pt-[60px] overflow-hidden
'>
      <DotPatternBackground
        dotsColorStyle='bg-ui-peach/50'
        dotPatternTopPaddingPx={5}
        dotsSeparationPx={{ vertical: 45, horizontal: 45 }}
        dotWidthPxIncreasePerRow={0}
        className='z-10 !h-[414px] overflow-hidden lg:!h-[450px]'
      />
      <div className='to-ui-black from-ui-black/0 absolute left-0 top-160 z-10 h-[420px] w-full bg-gradient-to-b lg:h-[460px]' />

      <div className='hidden lg:block absolute left-0 bottom-[340px] z-10'>
        <LineDecoDesktop />
      </div>
      <div className='block lg:hidden z-10'>
        <LineDecoMobile />
      </div>

      <div className='absolute top-0 h-full w-full max-w-[320px] lg:max-w-[886px] right-[8%] z-10'>
        <HalfCircleDeco />
      </div>

      <h3
        id='book-section'
        className='text-[24px] z-30 font-medium leading-[32px] lg:text-[52px] lg:leading-[57px] text-center md:text-left'>
        Custom plans that fit your &nbsp;
        <span className='font-kepler-std text-ui-green-light text-[30px] italic lg:text-[60px]'>scale</span>
      </h3>

      <div className='mt-[40px] flex w-full flex-col gap-[20px] lg:mt-[64px] lg:max-w-[1280px] lg:flex-row lg:gap-[32px] z-30'>
        <div className='lg:flex-1 mb-6'>
          <div className='max-w-3xl mx-auto text-center md:text-left bg-[#20233A] border-[1px] border-[#5F6382] p-6'>
            <div className='inline-block mb-6'>
              <div className='px-4 py-2 text-lg font-normal text-ui-whitest border-2 border-ui-whitest rounded-full font-clash-display'>
                Starting at $15,000 per month
              </div>
            </div>

            <h3 className='text-[24px] z-30 font-medium leading-[32px] lg:text-[52px] lg:leading-[57px]'>
              One subscription for <br />
              <span className='font-kepler-std text-ui-green-light text-[30px] italic lg:text-[60px]'>
                AI Led Growth
              </span>
            </h3>

            <h4 className='font-elza z-30 mt-[24px] lg:mt-10 text-[20px] font-[400] leading-[24px] text-[#CECEE3]'>
              We act as an extension to your team,
              <br /> delivering outcomes, not tools.
            </h4>

            <KitButton
              className='inline-flex bg-ui-whitest [&&]:text-ui-black mt-10 [&&]:hover:text-ui-whitest'
              withAnimatedArrow='to-left'
              size='large'
              variant='primary'
              href='/book-demo'
              onClick={() => trackDemoBookingClick('custom_plans_section', 'home_page')}>
              Book a Demo
            </KitButton>
          </div>
        </div>
        <div className='lg:flex-1'>
          <div className='max-w-3xl mx-auto lg:ml-12'>
            {customPlans.categories.map(category => (
              <div key={category.title} className='border-b border-ui-veige mb-6 bg-ui-white'>
                <div
                  className='flex justify-between items-center p-6 cursor-pointer'
                  onClick={() => toggleSection(category.title)}>
                  <div>
                    <h2 className='text-2xl font-medium text-ui-black'>{category.title}</h2>
                    <p className='text-[16px] text-ui-black mt-1'>{category.description}</p>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: openSection === category.title ? 180 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <ChevronDown className='w-6 h-6 text-ui-grey' />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openSection === category.title && category.characteristics.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}>
                      <div className='px-6 pb-2'>
                        {category.characteristics.map((characteristic, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: index * 0.05,
                            }}
                            className={`py-3 ${
                              index === 0 ? '' : 'border-t'
                            } border-ui-veige flex justify-between items-center`}>
                            <h3 className='text-[14px] text-ui-black'>{characteristic}</h3>
                            <Check className='w-6 h-6 text-ui-blue' />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomPlans;
