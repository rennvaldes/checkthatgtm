import React from 'react';

import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainData } from '@/lib/api/strapi/who-we-are-for';

import CornerDeco from '../icons/CornerDecoration';
import DotPatternBackground from '../ui/DotPatternBackground';
import KitButton from '../ui/KitButton';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

function Decorations() {
  return (
    <svg
      className='relative z-10 float-right mt-[10px] lg:absolute lg:bottom-0 lg:right-0 lg:h-[500px] lg:w-[270px]'
      width='144'
      height='228'
      viewBox='0 0 144 228'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0.0683594 143.286C32.1419 143.286 58.1427 169.287 58.1427 201.36V292H0.0683594V143.286Z'
        fill='url(#paint0_linear_560_30765)'
      />
      <rect width='57.9456' height='57.9456' transform='translate(0.246094 85.2119)' fill='#F7F4FF' />
      <path
        d='M30.3414 117.268H27.2123V116.283C27.2123 114.544 28.2553 113.588 30.0227 112.835L32.1087 111.937C33.7602 111.212 34.6294 110.604 34.6294 109.271C34.6294 107.794 33.7602 106.722 30.0227 106.722C25.9665 106.722 24.6048 107.967 24.6048 110.401V111.241H21.5337V110.575C21.5337 106.982 24.0543 103.882 30.2255 103.882C35.5855 103.882 37.7584 106.258 37.7584 109.155C37.7584 111.966 35.7593 113.211 33.7602 114.081L31.6741 114.95C30.5732 115.413 30.3414 115.819 30.3414 116.659V117.268ZM30.5732 123.584H27.0385V119.296H30.5732V123.584Z'
        fill='#20233A'
      />
      <rect x='58.1406' y='85.2119' width='85.2119' height='194.848' fill='url(#paint1_linear_560_30765)' />
      <rect x='58.1406' width='85.2119' height='85.2119' rx='42.606' fill='#4400FF' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M114.077 35.6547L97.9499 51.7819L88.1167 41.9487L89.6002 40.4652L97.9499 48.8149L112.594 34.1711L114.077 35.6547Z'
        fill='#FDFDFF'
      />
      <defs>
        <linearGradient
          id='paint0_linear_560_30765'
          x1='29.1055'
          y1='143.286'
          x2='29.1055'
          y2='292'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#F7F4FF' />
          <stop offset='1' stopColor='#F7F4FF' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_560_30765'
          x1='100.747'
          y1='85.2119'
          x2='100.747'
          y2='280.06'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#4400FF' />
          <stop offset='1' stopColor='#4400FF' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function WhoWeAreForSection() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'who-we-are-for-section',
    getFn: getMainData,
  });

  const { isDesktop } = useResponsiveDevice();

  const data = React.useMemo(() => rawData?.data.attributes, [rawData?.data]);

  return (
    <section className='relative mt-[110px] w-full lg:mt-[197px] lg:h-[433px]'>
      <div className='bg-ui-green-light absolute left-0 top-0 -z-20 h-full w-screen' />

      <div className='from-ui-green-light to-ui-green-light/0 absolute left-0 top-0 -z-10 h-[300px] w-full bg-gradient-to-t lg:h-full' />
      <DotPatternBackground
        className='h-[250px] px-[10px] lg:h-full lg:max-h-full lg:px-[25px]'
        dotsSeparationPx={{ horizontal: isDesktop ? 45 : 27, vertical: isDesktop ? 45 : 26 }}
        dotWidthPxIncreasePerRow={0}
        dotPatternTopPaddingPx={2}
      />

      <div className='relative mx-auto w-[320px] pt-[32px] lg:h-full lg:w-full lg:max-w-[1280px] lg:pt-[64px]'>
        <CornerDeco className='text-ui-peach absolute left-0 top-0 h-[40px] w-[40px] translate-y-[-100%] -rotate-90 lg:left-[67px] lg:h-[72px] lg:w-[72px]' />

        {isLoading ? (
          <Skeleton className='h-[31px] w-[200px] lg:h-[57px] lg:w-[360px]' />
        ) : (
          <h3 className='bg-ui-green-light w-[200px] text-[28px] font-medium leading-[31px] lg:w-[360px] lg:text-[52px] lg:leading-[57px]'>
            {data.title}
          </h3>
        )}
        {isLoading ? (
          <Skeleton className='mt-[16px] h-[96px] w-[320px] lg:mt-[12px] lg:h-[60px] lg:w-[800px]' />
        ) : (
          <p className='bg-ui-green-light font-elza mt-[16px] w-[320px] text-[16px] leading-[24px] lg:mt-[12px] lg:w-[800px] lg:text-[20px] lg:leading-[30px]'>
            {data.sub_title}
          </p>
        )}

        <div className='flex'>
          {isLoading ? (
            <Skeleton className='mt-[20px] h-[52px] w-[187px] lg:mt-[32px]' />
          ) : (
            <KitButton
              isDisabled={isLoading}
              href={data.button_url}
              className='mt-[20px] lg:mt-[32px]'
              variant='primary'
              size='large'
              withAnimatedArrow='to-right'>
              {data.button_text}
            </KitButton>
          )}
        </div>

        <Decorations />
      </div>
    </section>
  );
}

export default WhoWeAreForSection;
