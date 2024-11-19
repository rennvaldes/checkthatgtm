/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/lib/shadcn/ui/carousel';
import React from 'react';

import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getCards } from '@/lib/api/strapi/results-section';
import { STRAPI_BASE_URL, STRAPI_IS_LOCAL_ENV } from '@/static/constants';

import ArrowRight from '../icons/ArrowRight';
import KitButton from '../ui/KitButton';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

function ResultsSection() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({ key: 'results-section', getFn: getCards });
  const { isDesktop } = useResponsiveDevice();

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [carouselWall, setCarouselWall] = React.useState<'left' | 'right'>();

  const { data, cards } = React.useMemo(
    () => ({
      data: rawData?.data.attributes,
      cards: rawData?.data.attributes.cards.data.map((cardData: any) => {
        const logoData = cardData.attributes.logo.data.attributes;
        return {
          ...cardData.attributes,
          logo: STRAPI_IS_LOCAL_ENV ? `${STRAPI_BASE_URL}${logoData.url}` : logoData.url,
        };
      }),
    }),
    [rawData?.data.attributes]
  );

  React.useEffect(() => {
    if (!carouselApi) return;

    const onSnapChange = () => {
      const currentIndex = carouselApi.selectedScrollSnap();
      if (currentIndex == 0) setCarouselWall('left');
      else if (cards && currentIndex >= cards.length - (isDesktop ? 3 : 1)) setCarouselWall('right');
      else if (carouselWall) setCarouselWall(undefined);
    };

    onSnapChange();
    carouselApi.on('select', onSnapChange);
  }, [cards, carouselApi, carouselWall, isDesktop]);

  return (
    <section
      id='results-section'
      className='mx-auto flex w-[260px] flex-col items-center self-stretch overflow-hidden pt-12 lg:w-full lg:max-w-[1280px] lg:pt-20 lg:pr-40'>
      <div className='flex w-full flex-col lg:flex-row lg:items-end lg:justify-between'>
        {isLoading ? (
          <Skeleton className='h-[62px] w-[260px] lg:h-[114px] lg:w-[600px]' />
        ) : (
          <h3 className='w-[260px] text-[28px] font-[500] leading-[31px] lg:w-[600px] lg:text-[52px] lg:leading-[57px]'>
            {data.title_black_left}{' '}
            <span className='font-kepler-std text-ui-blue text-[32px] italic lg:text-[60px]'>{data.title_colored}</span>{' '}
            {data.title_black_right}
          </h3>
        )}

        <div className='mt-[8px] flex h-[32px] justify-end gap-[8px] lg:h-[64px]'>
          <KitButton
            variant='secondary'
            size='custom'
            isDisabled={carouselWall === 'left'}
            onClick={() => carouselApi?.scrollPrev()}
            className='disabled:text-ui-black/40 flex w-[52px] items-center justify-center lg:w-[64px]'>
            <ArrowRight className='rotate-180 lg:h-[32px] lg:w-[32px]' />
          </KitButton>
          <KitButton
            variant='secondary'
            size='custom'
            isDisabled={carouselWall === 'right'}
            onClick={() => carouselApi?.scrollNext()}
            className='disabled:text-ui-black/40 flex w-[52px] items-center justify-center lg:w-[64px]'>
            <ArrowRight className='lg:h-[32px] lg:w-[32px]' />
          </KitButton>
        </div>
      </div>

      {isLoading ? (
        <Skeleton className='mt-[24px] h-[308px] w-full lg:mt-[64px] lg:h-[434px] lg:max-w-[1440px]' />
      ) : (
        <Carousel className='mt-[24px] w-full lg:mt-[64px] lg:max-w-[1440px]' setApi={setCarouselApi}>
          <CarouselContent className='w-[260px] lg:w-[382px]'>
            {cards.map(({ name, logo, title, sub_title, redirect_to_url, link_title }: any) => (
              <CarouselItem key={name}>
                <article className='bg-ui-whitest flex h-[308px] w-[240px] flex-col justify-between border-[1px] border-[#ECECF6] p-[20px] lg:h-[434px] lg:w-[350px] lg:p-[32px]'>
                  <div>
                    <img alt='logo' src={logo} style={{ height: '30px' }} />
                    <p className='font-clash-display mt-[24px] text-[40px] font-[600] leading-[38px] lg:mt-[40px] lg:text-[70px] lg:leading-[67px]'>
                      {title}
                    </p>
                    <p className='font-elza mt-[8px] text-[16px] font-[400] leading-[24px] lg:mt-[20px] lg:text-[20px] lg:leading-[30px]'>
                      {sub_title}
                    </p>
                  </div>
                  {redirect_to_url && (
                    <div className='flex'>
                      <KitButton
                        isDisabled={!redirect_to_url}
                        href={redirect_to_url}
                        className='disabled:text-ui-black/50 flex items-center justify-start gap-[16px] pl-0 text-[18px] font-[500]'
                        size='medium'
                        withAnimatedArrow={redirect_to_url ? 'to-right' : undefined}
                        variant='ghost'>
                        {link_title || 'See this case'}
                      </KitButton>
                    </div>
                  )}
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </section>
  );
}

export default ResultsSection;
