/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Check from '../icons/Check';
import DotPatternBackground from '../ui/DotPatternBackground';
import KitButton from '../ui/KitButton';

function PricingSection() {
  // Static data
  const staticData = {
    plans: [
      {
        title: 'Content Workstream',
        description: 'Boost strategy with Content Workstream. Automated workflows and analytics for better engagement.',
        monthly_price: 9000,
        button_text: 'Talk to Strategist',
        button_url: '/contact',
        benefits: [
          'Up to 50,000 words/month published',
          'Hands-on strategist with track record',
          'Dedicated managing editor',
          'Content and keyword strategy',
          'Fully managed end-to-end publishing',
          'Custom Content OS & CMS Integration',
          'Advanced AI workflows built for you',
          'Network of vetted experts, writers & editors',
          'Artwork and custom images included',
          'Weekly monitoring and reporting',
          'We work in Slack as an extension of your team',
        ],
      },
      {
        title: 'pSEO Workstream',
        description: 'Boost strategy with Content Workstream. Automated workflows and analytics for better engagement.',
        monthly_price: 9000,
        button_text: 'Talk to Strategist',
        button_url: '/contact',
        benefits: [
          'Up to 1,200 pages per year',
          'Hands-on strategist with track record',
          'Dedicated managing editor',
          'Content and keyword strategy',
          'Fully managed end-to-end publishing',
          'Custom Content OS & CMS Integration',
          'Advanced AI workflows built for you',
          'Network of vetted experts, writers & editors',
          'Artwork and custom images included',
          'Weekly monitoring and reporting',
          'We work in Slack as an extension of your team',
        ],
      },
      {
        title: 'Custom Workstream',
        description: 'Unlock potential with Custom Workstream. Personalized strategies and dedicated support.',
        monthly_price: null,
        button_text: 'Talk to Strategist',
        button_url: '/contact',
        benefits: [
          'AI-powered outbound',
          'Lifecycle & email marketing',
          'Content repurposing',
          'Link building campaigns',
          'AI CRM enrichment',
          'AI research & prospecting',
        ],
      },
    ],
  };

  return (
    <section
      id='pricing-section'
      className='bg-ui-black text-ui-whitest relative mx-auto mt-[80px] flex w-full flex-col items-center pb-[33px] pt-[30px] lg:mt-[148px] lg:pt-[90px]'>
      <>
        <DotPatternBackground
          dotsColorStyle='bg-ui-peach/50'
          dotPatternTopPaddingPx={5}
          dotsSeparationPx={{ vertical: 45, horizontal: 45 }}
          dotWidthPxIncreasePerRow={0}
          className='z-10 !h-[414px] overflow-hidden lg:!h-[450px]'
        />
        <div className='to-ui-black from-ui-black/0 absolute left-0 top-0 z-20 h-[420px] w-full bg-gradient-to-b lg:h-[460px]' />
      </>

      <h3 className='bg-ui-black relative z-30 w-[320px] text-center text-[28px] font-medium leading-[31px] lg:w-auto lg:max-w-[1280px] lg:text-[52px] lg:leading-[57px]'>
        Custom plans that fit your&nbsp;
        <span className='font-kepler-std text-ui-green-light text-[32px] italic lg:text-[60px]'>
          scale
        </span>
      </h3>

      <div className='mt-[40px] flex w-[320px] flex-col gap-[20px] lg:mt-[64px] lg:w-auto lg:max-w-[1280px] lg:flex-row lg:gap-[32px]'>
        {staticData.plans.map((planData, index) => {
          const hasPrice = !!planData.monthly_price;

          return (
            <article
              key={index}
              className='bg-ui-black relative z-30 border-[1px] border-[#5F6382] px-[20px] py-[32px] lg:w-auto lg:flex-1 lg:px-[32px] lg:py-[40px]'>
              <h4 className='text-ui-peach text-[20px] font-medium leading-[23px] lg:text-[24px] lg:leading-[28px]'>
                {planData.title}
              </h4>
              <p className='font-elza mt-[12px] text-[16px] font-normal leading-[24px] lg:mt-[20px] lg:h-[100px]'>
                {planData.description}
              </p>
              <h5
                data-price={hasPrice}
                className='mt-[32px] text-[40px] font-[600] leading-[32px] data-[price=false]:text-[52px] data-[price=false]:leading-[50px] lg:text-[52px] lg:leading-[50px]'>
                {hasPrice ? (
                  <>
                    $ {planData.monthly_price.toLocaleString('en-US')}{' '}
                    <span className='text-[16px] leading-[15px] lg:text-[24px] lg:leading-[23px]'>/mo</span>
                  </>
                ) : (
                  'Custom'
                )}
              </h5>

              <div className='mt-[32px] flex lg:mt-[52px]'>
                <KitButton
                  href={planData.button_url}
                  className='bg-ui-whitest text-ui-black hover:bg-ui-blue hover:text-ui-whitest focus:bg-ui-blue focus:text-ui-whitest w-full rounded-full font-medium transition-colors duration-300'
                  size='large'
                  variant='ghost'>
                  {planData.button_text}
                </KitButton>
              </div>

              <div className='font-elza mt-[32px] flex flex-col gap-[16px]'>
                {planData.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className='flex gap-[12px]'>
                    <Check className='text-ui-green-light h-[24px] w-[16px] shrink-0' />
                    <h6 className='text-[16px] leading-[24px]'>{benefit}</h6>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default PricingSection;
