'use client';

import Image from 'next/image';
import React from 'react';
import Lottie from 'lottie-react';

import balloon from '@/assets/img/balloon.png';
import X from '@/components/icons/X';
import useOnEnterView from '@/lib/litebox-lib/hooks/useOnEnterView';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataWithLotties } from '@/lib/api/strapi/parallax-section';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

function Triangle() {
  return (
    <svg
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      className='text-ui-green absolute left-[153px] top-[928px] hidden lg:block'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M33 0L-1.44248e-06 33L33 33L33 0Z' fill='currentColor' />
    </svg>
  );
}

function ParallaxSection() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'parallax-section-data',
    getFn: getMainDataWithLotties,
  });

  const lottie1Ref = React.useRef<any>();
  const lottie2Ref = React.useRef<any>();
  const lottie3Ref = React.useRef<any>();

  const { data, mappedLotties } = React.useMemo(() => {
    if (!rawData) return { data: {}, mappedLotties: [] as Record<string, any> };

    const data = rawData.data.attributes;
    const lottiesAnimationData = data.lotties.data.map(({ attributes }: any) => attributes.lottieData);

    const mappedLotties: Record<string, any> = {
      'parallax-section-lottie-1': {
        animationData: lottiesAnimationData[0],
        ref: lottie1Ref,
        containerStyles:
          'bg-ui-black/40 absolute left-[14px] w-[165px] h-[186px] lg:left-[275px] top-[392px] lg:top-[455px] flex lg:h-[350px] lg:w-[310px] items-center justify-center text-xl',
      },
      'parallax-section-lottie-2': {
        animationData: lottiesAnimationData[1],
        ref: lottie2Ref,
        containerStyles:
          'bg-ui-black/40 parallax-section-lottie-2 absolute w-[180px] h-[204px] right-[-15px] top-[776px] lg:right-0 lg:top-[948px] flex lg:h-[384px] lg:w-[340px] items-center justify-center text-xl',
      },
      'parallax-section-lottie-3': {
        animationData: lottiesAnimationData[2],
        ref: lottie3Ref,
        containerStyles:
          'bg-ui-black/40 parallax-section-lottie-3 absolute bottom-[295px] lg:bottom-[408px] left-[-9px] w-[135px] h-[152px] lg:left-0 flex lg:h-[284px] lg:w-[252px] items-center justify-center text-xl',
      },
    };

    return { data, mappedLotties };
  }, [rawData]);

  useOnEnterView({
    onEnterView: (id: string) => mappedLotties[id].ref.current.play(),
    selectors: Object.keys(mappedLotties).map(id => `.${id}`),
  });

  return (
    <section id='parallax-section' className='relative z-20 mx-auto h-[1396px] w-[360px] lg:h-[1978px] lg:w-[1250px]'>
      {isLoading ? (
        <div className='sticky top-0 mt-[-200px] flex flex-col items-center gap-2 pb-[100px] pt-[290px] lg:mt-[-140px] lg:pt-[310px]'>
          <Skeleton className='h-[76px] w-[60%] lg:h-[72px]' />
          <Skeleton className='h-[40px] w-[70%] lg:h-[72px]' />
          <Skeleton className='h-[40px] w-[55%] *:lg:h-[72px]' />
        </div>
      ) : (
        <h2 className='sticky top-0 mx-auto mt-[-200px] w-[320px] pb-[100px] pt-[290px] text-center text-[36px] font-medium leading-[40px] lg:mt-[-140px] lg:w-auto lg:pt-[310px] lg:text-[70px] lg:leading-[77px]'>
          {data.background_text_line1}
          <br />
          {data.background_text_line2}{' '}
          <span className='font-kepler-std text-ui-blue text-[42px] italic lg:mr-0 lg:text-[80px]'>
            {data.background_text_line2_colored}
          </span>
          <br className='hidden lg:block' /> {data.background_text_line3}
        </h2>
      )}

      {Object.keys(mappedLotties).map(id => (
        <div key={id} id={id} className={`${mappedLotties[id].containerStyles} ${id}`}>
          <Lottie
            lottieRef={mappedLotties[id].ref}
            loop={false}
            autoplay={false}
            className='h-full w-full'
            animationData={mappedLotties[id].animationData}
          />
        </div>
      ))}

      <div className='absolute left-[122px] top-[557px] flex items-end justify-center lg:left-[515px] lg:top-[717px]'>
        <Image
          src={balloon}
          alt='A black and white air balloon'
          className='z-30 h-[115px] w-[116px] lg:h-[218px] lg:w-[219px]'
        />
        <div className='from-ui-peach to-ui-peach/0 absolute top-[42px] z-10 h-[185px] w-[81px] bg-gradient-to-b lg:top-[78px] lg:h-[348px] lg:w-[153px]' />
      </div>
      <Triangle />
      <X className='text-ui-blue absolute right-[121px] top-[707px] hidden lg:block' />
      <X className='text-ui-blue absolute left-[527px] top-[1377px] hidden lg:block' />
    </section>
  );
}

export default ParallaxSection;
