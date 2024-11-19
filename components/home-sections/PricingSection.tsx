import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import Check from '../icons/Check';
import DotPatternBackground from '../ui/DotPatternBackground';
import KitButton from '../ui/KitButton';
import { getDataWithPlansWithBenefits } from '@/lib/api/strapi/pricing-section';
import React from 'react';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

function PricingSection() {
  const { isDesktop, isProcessing } = useResponsiveDevice();
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'pricing-section',
    getFn: getDataWithPlansWithBenefits,
  });

  const { mainData, plans } = React.useMemo(() => {
    if (!rawData) return {};

    const { plans: rawPlansData, ...mainData } = rawData.data.attributes;

    const plans = rawPlansData.data.map(({ attributes }: any) => ({
      ...attributes,
      benefits: attributes.benefits.data.map(({ attributes }: any) => attributes),
    }));

    return { mainData, plans };
  }, [rawData]);

  return (
    <section
      id='pricing-section'
      className='bg-ui-black text-ui-whitest relative mx-auto mt-[80px] flex w-full flex-col items-center pb-[33px] pt-[30px] lg:mt-[148px] lg:pt-[90px]'>
      {!isProcessing && (
        <>
          <DotPatternBackground
            dotsColorStyle='bg-ui-peach/50'
            dotPatternTopPaddingPx={5}
            dotsSeparationPx={{ vertical: isDesktop ? 45 : 28, horizontal: isDesktop ? 45 : 28 }}
            dotWidthPxIncreasePerRow={0}
            className='z-10 !h-[414px] overflow-hidden lg:!h-[450px]'
          />
          <div className='to-ui-black from-ui-black/0 absolute left-0 top-0 z-20 h-[420px] w-full bg-gradient-to-b lg:h-[460px]' />
        </>
      )}

      {isLoading ? (
        <Skeleton className='bg-ui-whitest/50 relative z-30 h-[62px] w-[320px] lg:h-[57px] lg:w-[780px]' />
      ) : (
        <h3 className='bg-ui-black relative z-30 w-[320px] text-center text-[28px] font-medium leading-[31px] lg:w-auto lg:max-w-[1280px] lg:text-[52px] lg:leading-[57px]'>
          {mainData.title_left}{' '}
          <span className='font-kepler-std text-ui-green-light text-[32px] italic lg:text-[60px]'>
            {mainData.title_colored}
          </span>
        </h3>
      )}

      <div className='mt-[40px] flex w-[320px] flex-col gap-[20px] lg:mt-[64px] lg:w-auto lg:max-w-[1280px] lg:flex-row lg:gap-[32px]'>
        {(plans || [1, 2, 3]).map((planData: any) => {
          const hasPrice = !!planData.monthly_price;

          return isLoading ? (
            <Skeleton
              key={planData}
              className='bg-ui-whitest/50 relative z-30 h-[500px] w-[320px] lg:w-auto lg:flex-1'
            />
          ) : (
            <article
              key={planData.title}
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
                {planData.benefits.map((benefitData: any, index: number) => (
                  <div key={`${benefitData}-${index}`} className='flex gap-[12px]'>
                    <Check className='text-ui-green-light h-[24px] w-[16px] shrink-0' />
                    <h6 className='text-[16px] leading-[24px]'>{benefitData.description}</h6>
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
