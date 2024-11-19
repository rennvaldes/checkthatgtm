/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Accordion from '@/lib/litebox-lib/ui/Accordion/Accordion';

function FaqSection() {
  // Static data from the database
  const staticData = {
    questions: [
      {
        title: 'What services does GrowthX offer?',
        description: 'We offer AI-powered growth strategies tailored to your business needs.',
      },
      {
        title: 'How does the AI workflow adaptation work?',
        description: 'Our experts adapt AI workflows specifically for your company and use case.',
      },
      {
        title: 'What is the Content OS setup?',
        description: 'Content OS is our system for managing and publishing content efficiently.',
      },
      {
        title: 'Can you help with content calibration?',
        description: 'Yes, we have dedicated growth leads who manage end-to-end AI workflow operations.',
      },
      {
        title: 'How can I get started with GrowthX?',
        description: 'You can book a free growth call with us to discuss your needs.',
      },
    ],
  };

  return (
    <section
      id='faq-section'
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px]'>
      <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
        FAQs
      </h3>

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          {staticData.questions.map((data, index) => (
            <Accordion
              key={`accordion-${index}`}
              id={`accordion-${index}`}
              title={
                <span className="text-[20px] lg:text-[24px] lg:max-w-[724px] max-w-[272px] lg:leading-[27.6px] leading-[26px]">
                  {data.title}
                </span>
              }
              content={<p className="leading-[24px] text-[16px]">{data.description}</p>}
              variant='filled'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
