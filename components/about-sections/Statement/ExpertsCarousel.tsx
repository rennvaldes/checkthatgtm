'use client';

import Experts1Image from '@/assets/img/AboutSection/experts-1.png';
import Experts2Image from '@/assets/img/AboutSection/experts-2.png';
import Experts3Image from '@/assets/img/AboutSection/experts-3.png';
import ArrowRight from '@/components/icons/ArrowRight';
import KitButton from '@/components/ui/KitButton';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/lib/shadcn/ui/carousel';
import { useCallback, useEffect, useState } from 'react';

const IMAGES = [Experts1Image.src, Experts2Image.src, Experts3Image.src];

function ExpertsCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselWall, setCarouselWall] = useState<'left' | 'right' | undefined>();

  const handleCarouselWall = useCallback(() => {
    if (!carouselApi) return;

    const onSnapChange = () => {
      const canScrollLeft = carouselApi.canScrollPrev();
      const canScrollRight = carouselApi.canScrollNext();

      if (canScrollLeft && canScrollRight) {
        setCarouselWall(undefined);
      } else if (canScrollLeft) {
        setCarouselWall('right');
      } else if (canScrollRight) {
        setCarouselWall('left');
      }
    };

    onSnapChange();

    carouselApi.on('select', onSnapChange);

    return () => {
      carouselApi.off('select', onSnapChange);
    };
  }, [carouselApi]);

  useEffect(handleCarouselWall, [handleCarouselWall]);

  return (
    <div className='w-[calc(100%_+_16px)] lg:w-full mt-10 flex flex-col gap-6 lg:gap-10 lg:mt-20 lg:relative'>
      <h3 className='font-clash-display font-[500] text-2xl lg:text-4xl [&&]:leading-[114%] tracking-normal text-center'>
        Meet the team
      </h3>

      <div className='hidden 2xl:block bg-ui-peach w-28 aspect-square rounded-full absolute -left-[56px] top-[320px] ml-[clamp(62px,_calc((100vw_-_1440px)_/_2_+_62px),241px)]' />

      <div className='flex flex-col gap-6 lg:gap-10 lg:max-w-[1920px] lg:pl-[clamp(62px,_calc((100vw_-_1440px)_/_2_+_62px),241px)]'>
        <Carousel
          className='bg-ui-white '
          setApi={setCarouselApi}
          opts={{
            align: 'start',
            slidesToScroll: 1,
            startIndex: 0,
          }}>
          <CarouselContent>
            {IMAGES.map((imgSrc, index) => (
              <CarouselItem className='basis-auto first-of-type:pl-4 lg:pl-8' key={`expert-image-${index.toString()}`}>
                <img className='h-48 lg:h-[471px]' src={imgSrc} alt={`expert-${index}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className='flex w-min gap-11 lg:gap-7'>
          <KitButton
            variant='secondary'
            size='custom'
            isDisabled={carouselWall === 'left'}
            onClick={() => carouselApi?.scrollPrev()}
            className='disabled:text-ui-black/40 lg:px-4'>
            <ArrowRight className='rotate-180 lg:w-8 lg:h-8' />
          </KitButton>
          <KitButton
            variant='secondary'
            size='custom'
            isDisabled={carouselWall === 'right'}
            onClick={() => carouselApi?.scrollNext()}
            className='disabled:text-ui-black/40 lg:px-4'>
            <ArrowRight className='lg:w-8 lg:h-8' />
          </KitButton>
        </div>
      </div>
    </div>
  );
}

export default ExpertsCarousel;
