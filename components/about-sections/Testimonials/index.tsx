'use client';

import ReviewsSection from '@/components/home-sections/ReviewsSection';

function Title() {
  return (
    <>
      <h3 className='text-ui-whitest lg:hidden font-clash-display font-[500] text-[28px] leading-[31px] tracking-normal text-center'>
        Real people, real{' '}
        <span className='text-ui-green-light font-kepler-std font-[500] italic text-[32px] leading-[31px] tracking-normal'>
          results
        </span>
      </h3>
      <h3 className='text-ui-whitest hidden lg:block font-clash-display font-[500] text-[52px] leading-[57px] tracking-normal text-center'>
        What our clients say{' '}
        <span className='text-ui-green-light font-kepler-std font-[500] italic text-[60px] leading-[57px] tracking-normal'>
          about us
        </span>
      </h3>
    </>
  );
}

function Gradient() {
  return (
    <div className='to-ui-black via-ui-black/90 from-ui-black/0 absolute bottom-0 left-0 z-20 h-[300px] w-full bg-gradient-to-b' />
  );
}

export default function Testimonials() {
  return (
    <section className='bg-ui-black w-full px-5 pt-10 pb-20 lg:pt-12 lg:px-20'>
      <ReviewsSection
        buttonProps={{
          className: 'absolute bottom-8 z-30 mx-auto bg-ui-whitest [&&]:text-ui-black [&&]:hover:text-ui-whitest',
          withAnimatedArrow: 'to-left',
        }}
        className='[&&]:m-0 [&&]:p-0 [&&]:max-w-full [&&]:lg:max-w-[1440px] [&&]:lg:mx-auto'
        customTitle={<Title />}
        gradientOverlay={<Gradient />}
      />
    </section>
  );
}
