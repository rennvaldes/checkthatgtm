/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getDataWithFaq } from '@/lib/api/strapi/faq-section';
import Accordion from '@/lib/litebox-lib/ui/Accordion/Accordion';
import { cn } from '@/lib/litebox-lib/utils/cn';

function FaqSection() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'faq-section',
    getFn: getDataWithFaq,
  });

  const { title, questions } = React.useMemo(() => {
    if (!rawData) return {};

    const { title, questions: rawQuestionsData } = rawData.data.attributes;
    const questions = rawQuestionsData.data
      .map(({ attributes }: any) => attributes)
      .sort((s1: any, s2: any) => s1.step_number - s2.step_number);

    return { title, questions };
  }, [rawData]);

  return (
    <section
      id='faq-section'
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px]'>
      {isLoading ? (
        <Skeleton className='mx-auto -mb-[32px] text-center h-[31px] w-[200px] lg:mb-0 lg:h-[57px] lg:w-[300px]' />
      ) : (
        <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
          {title}
        </h3>
      )}

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          {(questions || [1, 2, 3, 4, 5]).map((data: any, index: number) => {
            return isLoading ? (
              <Skeleton key={index} className='mb-4 h-[70px] w-full' />
            ) : (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
