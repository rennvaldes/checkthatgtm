'use client';

import React, { useEffect } from 'react';
import WhiteLogoX from '../icons/WhiteLogoX';
import DotPatternBackground from '../ui/DotPatternBackground';
import CornerDeco from '../icons/CornerDecoration';

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

function Clock() {
  return (
    <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10 20.6172C4.47715 20.6172 0 16.14 0 10.6172C0 5.09434 4.47715 0.617188 10 0.617188C15.5228 0.617188 20 5.09434 20 10.6172C20 16.14 15.5228 20.6172 10 20.6172ZM10 18.6172C14.4183 18.6172 18 15.0355 18 10.6172C18 6.19891 14.4183 2.61719 10 2.61719C5.58172 2.61719 2 6.19891 2 10.6172C2 15.0355 5.58172 18.6172 10 18.6172ZM11 10.6172H15V12.6172H9V5.61719H11V10.6172Z'
        fill='#20233A'
      />
    </svg>
  );
}

function BookSection() {
  const isDesktop = true; // Set based on your static design requirements

  // Static Data
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    if (head) head.appendChild(script);
  }, []);

  return (
    <section className='bg-ui-black text-ui-whitest relative flex w-full flex-col items-center overflow-visible pt-[39px] lg:pt-[100px]'>
      {isDesktop ? <LineDecoDesktop /> : <LineDecoMobile />}
      <div className='absolute top-0 h-full w-[320px] lg:w-[886px]'>
        <HalfCircleDeco />
      </div>

      <h3
        id='book-section'
        className='max-w-[320px] pt-[30px] text-[28px] font-medium leading-[31px] lg:pt-[92px] lg:text-[52px] lg:leading-[57px]'>
        Book a&nbsp;
        <span className='font-kepler-std text-ui-peach text-[32px] italic lg:text-[60px]'>Call</span>
      </h3>

      <div className='relative z-20 -mb-[165px] mt-[40px] flex flex-col bg-white lg:mt-[64px] lg:w-[866px] lg:flex-row'>
        <div className='bg-ui-whitest text-ui-black relative z-20 flex w-[320px] flex-col items-center border-b-[1px] border-[#CBC8D9] px-[20px] py-[40px] lg:w-auto lg:items-start lg:border-b-0 lg:border-r-[1px] lg:p-[40px]'>
          <WhiteLogoX className='text-ui-blue' />

          <p className='font-elza mt-[20px] text-[16px] font-[600] leading-[21px] text-[#85889D]'>GrowthX</p>
          <h4 className='font-elza text-center text-[28px] font-[600] leading-[31px] lg:leading-[37px]'>
            Intro Call
          </h4>

          <div className='mt-[26px] flex items-center gap-[12px] self-stretch'>
            <Clock />
            <p className='mt-[2px] font-[600] leading-[18px]'>30 minutes</p>
          </div>

          <h5 className='font-elza mt-[24px] leading-[18px]'>
            Book a call with our team by selecting an available date from the calendar and we’ll walk you through the plan to boost your organic traffic and revenue via content.
          </h5>
        </div>

        <div className='relative z-20 w-full overflow-scroll bg-white lg:w-[433px] lg:flex-shrink-0'>
          <div
            className='calendly-inline-widget mx-auto w-full'
            data-url='https://calendly.com/growthxai/intro?hide_event_type_details=1&hide_gdpr_banner=1'
            style={{ width: isDesktop ? 413 : 285, height: isDesktop ? 600 : 520 }}></div>
        </div>
      </div>

      <div className='bg-ui-white relative flex h-[315px] w-full flex-col items-center'>
        <DotPatternBackground
          className='relative z-10 h-[315px]'
          dotsSeparationPx={{ vertical: isDesktop ? 70 : 40, horizontal: isDesktop ? 70 : 40 }}
          dotPatternTopPaddingPx={10}
          dotWidthPxIncreasePerRow={0}
        />

        <div className='to-ui-white from-ui-white/0 absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b' />
        <div className='absolute top-0 z-10 h-full w-[360px] lg:w-[866px]'>
          <CornerDeco className='text-ui-peach lg: absolute left-[6px] top-[128px] rotate-180 lg:-left-[31px] lg:top-[118px] lg:h-[82px] lg:w-[82px]' />
        </div>
      </div>
    </section>
  );
}

export default BookSection;
