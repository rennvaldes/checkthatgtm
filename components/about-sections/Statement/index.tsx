import DanielImage from '@/assets/img/AboutSection/daniel-lopes.png';
import MarcelImage from '@/assets/img/AboutSection/marcel-santilli.png';
import InfiniteSlider from '@/components/ui/InfiniteSlider';
import { cn } from '@/lib/shadcn/utils';
import { ReactNode } from 'react';
import DetailCard from './DetailCard';
import ExpertsCarousel from './ExpertsCarousel';
import ImageCard from './ImageCard';
import Icons from './Icons';

const LIST = [
  {
    classNameFirstRow: 'bg-ui-green-light',
    classNameSecondRow: 'bg-ui-blue',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    classNameFirstRow: 'bg-ui-peach',
    classNameSecondRow: 'bg-ui-green-light',
    name: 'Keran Mehandru',
    position: 'Managing Director at Madrona',
  },
  {
    classNameFirstRow: 'bg-ui-blue',
    classNameSecondRow: 'bg-ui-peach',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    classNameFirstRow: 'bg-ui-green-light',
    classNameSecondRow: 'bg-ui-blue',
    name: 'Keran Mehandru',
    position: 'Managing Director at Madrona',
  },
];

const getInfiniteItems = ({ isFirstRow }: { isFirstRow: boolean }) => {
  const items: ReactNode[] = LIST.map(({ name, position, classNameFirstRow, classNameSecondRow }, index) => (
    <div
      className='flex flex-col items-center justify-center gap-1 w-[234px]'
      key={`first-row-${name}-${index.toString()}`}>
      <div className={cn([isFirstRow ? classNameFirstRow : classNameSecondRow, 'w-6 h-3 rounded-t-full'])} />
      <h4 className='font-elza font-[600] text-[16px] lg:text-[20px] leading-[150%] tracking-normal'>{name}</h4>
      <p className='font-elza font-[400] text-sm lg:text-[14px] leading-[150%] tracking-normal'>{position}</p>
    </div>
  ));

  return items;
};

const MARCEL_DETAIL = [
  {
    title: 'CTO & Co-Founder',
    subTitle: <DetailCard.SubTitle>of Canopy (Basecamp spin-off)</DetailCard.SubTitle>,
  },
  {
    title: 'Led product & web',
    subTitle: <DetailCard.SubTitle>at IFFTTT, serving millons of user</DetailCard.SubTitle>,
  },
  {
    title: 'EIR for Techstars’',
    subTitle: <DetailCard.SubTitle>first San Francisco class (2024)</DetailCard.SubTitle>,
  },
  {
    title: 'Helped pioneer',
    subTitle: (
      <DetailCard.SubTitle>the concept of code bootcamps at Starter league (Chicago, 2012-2015)</DetailCard.SubTitle>
    ),
  },
  {
    title: 'Trained 1k+ developers',
    subTitle: <DetailCard.SubTitle>and helped build the Rails community in Brazil (2008-2012)</DetailCard.SubTitle>,
  },
];

const DANIEL_DETAIL = [
  {
    title: 'Led growth/marketing at fast-scaling tech leaders:',
    subTitle: (
      <DetailCard.SubTitle clasName='max-w-[246px]'>
        <strong>Scale AI</strong> (valued at $ 14B), <strong>ServiceTitan</strong> ($772M ARR) &{' '}
        <strong>HashiCorp</strong> (acquired after a $13B IPO)
      </DetailCard.SubTitle>
    ),
  },
  {
    title: 'Pioneered an AI + human workflows',
    subTitle: (
      <DetailCard.SubTitle>
        at <strong>Deepgram</strong> that 24x traffic and 4x revenue
      </DetailCard.SubTitle>
    ),
  },
  {
    title: 'Scaled content program',
    subTitle: (
      <DetailCard.SubTitle>
        at <strong>IBM</strong> and <strong>HP/HPE</strong>
      </DetailCard.SubTitle>
    ),
  },
];

export default function Statement() {
  return (
    <section className='px-4 pt-10 pb-20 lg:pt-20 lg:pr-0 lg:max-w-7xl lg:mx-auto'>
      <h2 className='font-clash-display font-[500] text-[28px] lg:text-[52px] leading-[31px] lg:leading-[57px] tracking-normal text-center'>
        The experts{' '}
        <span className='font-kepler-std font-[500] italic text-[32px] lg:text-[60px] leading-[31px] lg:leading-[57px] text-ui-blue'>
          behind AI
        </span>
      </h2>

      <div className='group/cards flex justify-center gap-4 mt-8 lg:mt-10 lg:relative lg:max-w-min lg:mx-auto'>
        <div className='lg:group-hover/cards:opacity-0 lg:group-hover/cards:z-0 transition-opacity flex gap-8 relative z-[4]'>
          <ImageCard
            title='Marcel Santilli'
            subtitle='CEO & Co-Founder'
            imgSrc={MarcelImage.src}
            imgAlt='marcel-santilli'
          />
          <DetailCard className='hidden lg:block' data={MARCEL_DETAIL} />
        </div>
        <div className='flex gap-8 lg:absolute lg:top-0'>
          <DetailCard className='hidden lg:block !pr-[30px]' data={DANIEL_DETAIL} />
          <ImageCard title='Daniel Lopes' subtitle='CTO & Co-Founder' imgSrc={DanielImage.src} imgAlt='daniel-lopes' />
        </div>
        <Icons />
      </div>

      <ExpertsCarousel />

      <h3 className='font-clash-display font-[500] text-[20px] lg:text-[24px] leading-[114%] tracking-normal text-center mt-16 lg:mt-[64px] max-w-[321px] lg:max-w-[739px] mx-auto'>
        Supported by a world-class team of growth leaders, operators, and technical experts
      </h3>
      <InfiniteSlider
        className='mt-6 lg:mt-10 lg:h-[71px]'
        fullSwipeDurationMs={30000}
        items={getInfiniteItems({ isFirstRow: true })}
      />
      <InfiniteSlider
        className='mt-10 lg:mt-10 lg:h-[71px]'
        fullSwipeDurationMs={30000}
        items={getInfiniteItems({ isFirstRow: false })}
        sliderClassName='-translate-x-1/2'
        swipeClassName='swipe-right'
      />
    </section>
  );
}
