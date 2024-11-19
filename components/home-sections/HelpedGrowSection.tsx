'use client';
import { useMemo } from 'react';

import InfiniteImagesSlider from '@/components/ui/InfiniteImagesSlider';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getLogos } from '@/lib/api/strapi/companies-helped-grow';
import { STRAPI_BASE_URL, STRAPI_IS_LOCAL_ENV } from '@/static/constants';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

function HelpedGrowSection() {
  const { data, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'helped-grow-section-data',
    getFn: getLogos,
  });

  const allLogos = useMemo(
    () =>
      data?.data.attributes.logos.data.map(({ attributes: logoData }: any) => {
        return { src: STRAPI_IS_LOCAL_ENV ? `${STRAPI_BASE_URL}${logoData.url}` : logoData.url, ...logoData };
      }),
    [data]
  );

  return (
    <section className='h-[90px] w-full pt-[20px] text-center lg:h-[145.9px] lg:pt-[40px]'>
      <h3 className='font-elza text-ui-grey text-[14px] font-normal leading-[17.6px] text-opacity-80 lg:text-[16px]'>
        {"Companies We've Helped Grow"}
      </h3>
      {isLoading ? (
        <Skeleton className='mt-[16px] h-[50px] w-full lg:mt-[32px]' />
      ) : (
        <InfiniteImagesSlider fullSwipeDurationMs={25000} className='mt-[16px] lg:mt-[32px]' images={allLogos} />
      )}
    </section>
  );
}

export default HelpedGrowSection;
