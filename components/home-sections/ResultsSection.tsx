 
'use client';

import React, { useState } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/lib/shadcn/ui/carousel';
import { motion } from 'framer-motion';

import ArrowRight from '../icons/ArrowRight';
import KitButton from '../ui/KitButton';

function ResultsSection() {
  // Static data based on your screenshots
  const staticData = {
    title: {
      blackLeft: 'Our',
      colored: 'results',
      blackRight: 'speak for themselves',
    },
    cards: [
      {
        name: 'Deepgram',
        logo: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg',
        title: '24x',
        sub_title: 'Organic growth one year. Published 4,000+ pages and delivered 6.5M organic visits.',
        redirect_to_url: null,
        link_title: null,
      },
      {
        name: 'Ramp',
        logo: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg',
        title: '3X',
        sub_title: 'High-quality content production in 6 weeks. Publishing 12 articles per week across multiple topic categories.',
        redirect_to_url: null,
        link_title: null,
      },
      {
        name: 'Reddit',
        logo: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg',
        title: '10X',
        sub_title: 'Increase in content velocity without sacrificing quality. Their AI-driven workflows and expert-in-the-loop model have completely transformed our output.',
        redirect_to_url: null,
        link_title: null,
      },
      {
        name: 'Steadily',
        logo: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/steadily_logo_2_a9fb3f3b54.svg',
        title: '100K',
        sub_title: "Organic visitors monthly. That's 5X traffic growth and 1,700 pages published.",
        redirect_to_url: null,
        link_title: null,
      },
      {
        name: 'Swoogo',
        logo: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/swoogo_logo_449d7f6b4c.svg',
        title: '2X',
        sub_title: "Traffic increase in just 2 months. Over 100 pages published or refreshed. Ranking for 3x more keywords.",
        redirect_to_url: null,
        link_title: null,
      }
    ],
  };

  const { title, cards } = staticData;
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselWall, setCarouselWall] = useState<'left' | 'right' | undefined>();
  const [isDesktop, setIsDesktop] = useState(false);

  React.useEffect(() => {
    if (!carouselApi) return;

    const onSnapChange = () => {
      const currentIndex = carouselApi.selectedScrollSnap();
      if (currentIndex === 0) setCarouselWall('left');
      else if (currentIndex >= cards.length - 1) setCarouselWall('right');
      else setCarouselWall(undefined);
    };

    onSnapChange();
    carouselApi.on('select', onSnapChange);
  }, [cards.length, carouselApi]);

  React.useEffect(() => {
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    updateIsDesktop();
    window.addEventListener('resize', updateIsDesktop);
    return () => window.removeEventListener('resize', updateIsDesktop);
  }, []);

  // Add this to control slides per view
  const slidesPerView = isDesktop ? 3 : 1.5;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id='results-section'
      className='mx-auto flex w-full max-w-[calc(100vw-32px)] flex-col items-center self-stretch overflow-hidden pt-12 lg:w-full lg:max-w-[1280px] lg:pt-20'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex w-full flex-col lg:flex-row lg:items-end lg:justify-between'>
        <h3 className='w-full text-[28px] font-[500] leading-[31px] lg:w-[600px] lg:text-[32px] lg:leading-[37px]'>
          Our{' '}
          <span className='font-kepler-std text-ui-blue text-[32px] italic lg:text-[37px]'>results</span>{' '}
          speak for themselves
        </h3>

        <div className='mt-[24px] flex justify-end gap-[8px]'>
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
      </motion.div>

      <Carousel
        className='mt-[24px] w-full lg:mt-[64px] lg:max-w-[1440px]'
        setApi={setCarouselApi}
        opts={{
          align: "start",
          slidesToScroll: 1,
          startIndex: 0,
        }}>
        <CarouselContent className='-ml-4 lg:-ml-8'>
          {cards.map(({ name, logo, title, sub_title, redirect_to_url, link_title }, index) => (
            <CarouselItem key={name} className='pl-4 lg:pl-8 basis-full lg:basis-1/3'>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className='bg-ui-whitest flex h-[308px] w-full flex-col justify-between border-[1px] border-[#ECECF6] p-[20px] lg:h-[434px] lg:w-full lg:p-[32px]'>
                <div>
                  <img alt={`${name} logo`} src={logo} style={{ height: '30px' }} />
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
              </motion.article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.section>
  );
}

export default ResultsSection;
