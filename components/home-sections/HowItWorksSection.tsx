/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/litebox-lib/utils/cn';
import useOnEnterView from '@/lib/litebox-lib/hooks/useOnEnterView';

const STEP_DURATION = 7000;

function HowItWorksSection() {
  const staticData = {
    title: 'How It Works',
    steps: [
      {
        step_number: 1,
        title: 'Content Strategy & Research',
        description: 'Every client is assigned a growth strategist with a proven track record...',
        image: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/1_ba71ab2212.png', // Replace with your actual image paths
      },
      {
        step_number: 2,
        title: 'AI Workflow Adaptation + Content OS Setup',
        description: 'We know exactly how to adapt workflows to your company and use case.',
        image: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/2_af36c02e9c.png',
      },
      {
        step_number: 3,
        title: 'Content Calibration',
        description: 'You get a fully dedicated growth lead who runs end-to-end AI workflow operations and handles any tedious groundwork to deliver results.',
        image: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/3_b42326d460.png',
      },
      {
        step_number: 4,
        title: 'Publish',
        description: "Growth comes from trying things. That's why everything we do is to get you results fast and double down on what's working.",
        image: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/4_1607d3bc80.png',
      },
      {
        step_number: 5,
        title: 'Scale, Refine, Test, Iterate, Optimize',
        description: "Growth comes from trying things. That's why everything we do is to get you results fast and double down on what's working.",
        image: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/5_7a64e11e1a.png',
      },
    ],
  };

  const [selectedStepIndex, setSelectedStepIndex] = useState(-1);
  const lastTimeout = useRef<NodeJS.Timeout>();

  const onChangeStep = useCallback(
    (newIndex: number) => {
      if (lastTimeout.current) clearTimeout(lastTimeout.current);
      setSelectedStepIndex(newIndex);

      const nextStepIndex = newIndex + 1 > staticData.steps.length - 1 ? 0 : newIndex + 1;
      lastTimeout.current = setTimeout(() => onChangeStep(nextStepIndex), STEP_DURATION);
    },
    []
  );

  const onResetStep = useCallback(
    (stepIndex: number) => {
      onChangeStep(-1);
      setTimeout(() => onChangeStep(stepIndex), 10);
    },
    [onChangeStep]
  );

  useOnEnterView({
    onEnterView: () => selectedStepIndex < 0 && onChangeStep(0),
    selectors: ['#how-it-works-section'],
  });

  return (
    <section
      id='how-it-works-section'
      className='mx-auto mt-[60px] w-[320px] pt-[50px] lg:mt-[100px] lg:w-full lg:max-w-[1280px] lg:pt-[30px]'>
      <h3 className='-mb-[32px] text-[28px] font-medium leading-[31px] lg:m-0 lg:text-[52px] lg:leading-[57px]'>
        {staticData.title}
      </h3>

      <div className='mt-[64px] hidden gap-[64px] lg:flex'>
        <div className='flex flex-grow flex-col'>
          {staticData.steps.map((step, index) => {
            const isSelected = selectedStepIndex === index;
            return (
              <article
                onKeyDown={(e) => e.key === 'Enter' && (isSelected ? onResetStep(index) : onChangeStep(index))}
                onClick={() => (isSelected ? onResetStep(index) : onChangeStep(index))}
                tabIndex={0}
                role='button'
                aria-hidden={!isSelected}
                key={step.step_number}
                className='group h-[150px] overflow-hidden transition-all duration-500 aria-hidden:h-[70px]'>
                <div className='flex gap-[32px]'>
                  <p
                    className={cn(
                      'text-ui-black/70 w-[16px] min-w-[16px] max-w-[16px] flex-1 pb-[26px] pt-[24px] text-[32px] font-medium leading-[35px]',
                      isSelected && '!text-ui-blue'
                    )}>
                    {step.step_number}
                  </p>
                  <div className='pb-[24px]'>
                    <h4
                      className={cn(
                        'text-ui-black/70 pb-[26px] pt-[24px] text-[20px] font-medium leading-[23px]',
                        isSelected && '!text-ui-blue'
                      )}>
                      {step.title}
                    </h4>
                    <h5 className='font-elza text-[16px] leading-[24px]'>{step.description}</h5>
                  </div>
                </div>
                <div className='bg-ui-black/20 h-[2px] w-full'>
                  <div
                    style={{ transitionDuration: isSelected ? `${STEP_DURATION}ms` : '0ms' }}
                    className='bg-ui-blue h-full w-full transition-all ease-linear group-aria-hidden:w-0'
                  />
                </div>
              </article>
            );
          })}
        </div>
        <img
          className='h-[520px] w-[608px] flex-shrink-0'
          src={staticData.steps[selectedStepIndex]?.image || staticData.steps[0].image}
          alt='Visual representation of the step'
        />
      </div>

      <div className='lg:hidden'>
        {staticData.steps.map((step) => (
          <article key={step.step_number} className='mt-[72px] flex gap-[16px]'>
            <p className='text-ui-blue w-[16px] min-w-[16px] flex-1 text-[24px] font-medium leading-[28px]'>
              {step.step_number}
            </p>
            <div>
              <h4 className='text-[20px] font-medium leading-[23px]'>{step.title}</h4>
              <h5 className='font-elza mt-[12px] text-[16px] leading-[24px]'>{step.description}</h5>
              <img className='mt-[20px]' src={step.image} alt='Visual representation of the step' />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
