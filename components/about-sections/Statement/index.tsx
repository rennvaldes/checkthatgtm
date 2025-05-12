import DanielImage from '@/assets/img/AboutSection/daniel-lopes.png';
import MarcelImage from '@/assets/img/AboutSection/marcel-santilli.png';
import InfiniteSlider from '@/components/ui/InfiniteSlider';
import DetailCard from './DetailCard';
import ExpertsCarousel from './ExpertsCarousel';
import Icons from './Icons';
import ImageCard from './ImageCard';
import { getInfiniteItems } from './utils';

// TODO: Replace placeholder with real values
const INFINITE_ITEMS_ROW_ONE = [
  {
    className: 'bg-ui-green-light',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    className: 'bg-ui-peach',
    name: 'Keran Mehandru',
    position: 'Managing Director at Madrona',
  },
  {
    className: 'bg-ui-blue',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    className: 'bg-ui-green-light',
    name: 'Keran Mehandru',
    position: 'Managing Director at Madrona',
  },
];

const INFINITE_ITEMS_ROW_TWO = [
  {
    className: 'bg-ui-blue',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    className: 'bg-ui-green-light',
    name: 'Keran Mehandru',
    position: 'Managing Director at Madrona',
  },
  {
    className: 'bg-ui-peach',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    className: 'bg-ui-blue',
    name: 'Keran Mehandru',
    position: 'Managing Director at Madrona',
  },
];

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
    <section className='px-4 pt-10 pb-20 lg:pt-20 lg:px-0'>
      <h2 className='font-clash-display font-[500] text-[28px] lg:text-[52px] leading-[31px] lg:leading-[57px] tracking-normal text-center'>
        The experts{' '}
        <span className='font-kepler-std font-[500] italic text-[32px] lg:text-[60px] leading-[31px] lg:leading-[57px] text-ui-blue'>
          behind AI
        </span>
      </h2>

      <div className='group/cards flex justify-center gap-4 mt-8 lg:mt-10 lg:relative lg:max-w-min lg:mx-auto'>
        <div className='lg:group-hover/cards:opacity-0 lg:group-hover/cards:z-0 transition-opacity flex gap-8 relative z-[6]'>
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
        className='mt-6 lg:mt-10 lg:h-[71px] lg:max-w-7xl lg:mx-auto'
        fullSwipeDurationMs={30000}
        items={getInfiniteItems({ data: INFINITE_ITEMS_ROW_ONE })}
      />
      <InfiniteSlider
        className='mt-10 lg:mt-10 lg:h-[71px] lg:max-w-7xl lg:mx-auto'
        fullSwipeDurationMs={30000}
        items={getInfiniteItems({ data: INFINITE_ITEMS_ROW_TWO })}
        sliderClassName='-translate-x-1/2'
        swipeClassName='swipe-right'
      />
    </section>
  );
}
