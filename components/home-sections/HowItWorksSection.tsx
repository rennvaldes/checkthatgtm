/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getDataWithSteps } from '@/lib/api/strapi/how-it-works-section';
import { STRAPI_BASE_URL, STRAPI_IS_LOCAL_ENV } from '@/static/constants';
import useOnEnterView from '@/lib/litebox-lib/hooks/useOnEnterView';
import { cn } from '@/lib/litebox-lib/utils/cn';

const STEP_DURATION = 7000;

function HowItWorksSection() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'how-it-works-section',
    getFn: getDataWithSteps,
  });

  const [selectedStepIndex, setSelectedStepIndex] = React.useState(-1);
  const lastTimeout = React.useRef<NodeJS.Timeout>();

  const { title, steps } = React.useMemo(() => {
    if (!rawData) return {};

    const { title, steps: rawStepsData } = rawData.data.attributes;
    const steps = rawStepsData.data
      .map(({ attributes }: any) => {
        const imageURL = attributes.image.data.attributes.url;
        const image = STRAPI_IS_LOCAL_ENV ? `${STRAPI_BASE_URL}${imageURL}` : imageURL;
        return { ...attributes, image };
      })
      .sort((s1: any, s2: any) => s1.step_number - s2.step_number);

    return { title, steps };
  }, [rawData]);

  const onChangeStep = React.useCallback(
    (newIndex: number) => {
      if (!steps) return;

      if (lastTimeout.current) clearTimeout(lastTimeout.current);
      setSelectedStepIndex(newIndex);

      const nextStepIndex = newIndex + 1 > steps.length - 1 ? 0 : newIndex + 1;
      lastTimeout.current = setTimeout(() => onChangeStep(nextStepIndex), STEP_DURATION);
    },
    [steps]
  );

  const onResetStep = React.useCallback(
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
      {isLoading ? (
        <Skeleton className='-mb-[32px] h-[31px] w-[200px] lg:mb-0 lg:h-[57px] lg:w-[300px]' />
      ) : (
        <h3 className='-mb-[32px] text-[28px] font-medium leading-[31px] lg:m-0 lg:text-[52px] lg:leading-[57px]'>
          {title}
        </h3>
      )}

      <div className='mt-[64px] hidden gap-[64px] lg:flex'>
        <div className='flex flex-grow flex-col'>
          {(steps || [1, 2, 3, 4, 5]).map((data: any, index: number) => {
            const isSelected = selectedStepIndex === index;
            return isLoading ? (
              <Skeleton key={index} className='mb-4 h-[70px] w-full' />
            ) : (
              <article
                onKeyDown={e => e.key === 'Enter' && (isSelected ? onResetStep(index) : onChangeStep(index))}
                onClick={() => (isSelected ? onResetStep(index) : onChangeStep(index))}
                tabIndex={0}
                role='button'
                aria-hidden={!isSelected}
                key={data.step_number || index}
                className='group h-[150px] overflow-hidden transition-all duration-500 aria-hidden:h-[70px]'>
                <div className='flex gap-[32px]'>
                  <p
                    className={cn(
                      'text-ui-black/70 w-[16px] min-w-[16px] max-w-[16px] flex-1 pb-[26px] pt-[24px] text-[32px] font-medium leading-[35px]',
                      isSelected && '!text-ui-blue'
                    )}>
                    {data.step_number}
                  </p>
                  <div className='pb-[24px]'>
                    <h4
                      className={cn(
                        'text-ui-black/70 pb-[26px] pt-[24px] text-[20px] font-medium leading-[23px]',
                        isSelected && '!text-ui-blue'
                      )}>
                      {data.title}
                    </h4>
                    <h5 className='font-elza text-[16px] leading-[24px]'>{data.description}</h5>
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
        {!isLoading && steps[selectedStepIndex]?.image ? (
          <img
            className='h-[520px] w-[608px] flex-shrink-0'
            src={steps[selectedStepIndex].image}
            alt='Visual representation of the step'
          />
        ) : (
          <Skeleton className='h-[520px] w-[608px] flex-shrink-0' />
        )}
      </div>

      <div className='lg:hidden'>
        {(steps || [1, 2, 3, 4, 5]).map((data: any, index: number) =>
          isLoading ? (
            <Skeleton key={index} className='mt-[72px] h-[350px]' />
          ) : (
            <article key={data.step_number} className='mt-[72px] flex gap-[16px]'>
              <p className='text-ui-blue w-[16px] min-w-[16px] flex-1 text-[24px] font-medium leading-[28px]'>
                {data.step_number}
              </p>
              <div className=''>
                <h4 className='text-[20px] font-medium leading-[23px]'>{data.title}</h4>
                <h5 className='font-elza mt-[12px] text-[16px] leading-[24px]'>{data.description}</h5>
                <img className='mt-[20px]' src={data.image} alt='Visual representation of the step' />
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default HowItWorksSection;
