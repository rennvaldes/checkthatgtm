import DanielImage from '@/assets/img/AboutSection/daniel-lopes.png';
import MarcelImage from '@/assets/img/AboutSection/marcel-santilli.png';
import InfiniteSlider from '@/components/ui/InfiniteSlider';
import DetailCard from './DetailCard';
import ExpertsCarousel from './ExpertsCarousel';
import Icons from './Icons';
import Image from 'next/image';
import ImageCard from './ImageCard';
import DeepgramLogo from '@/assets/img/logos/logo-deepgram.svg';
import HashiCorpLogo from '@/assets/img/logos/logo-hashicorp.svg';
import ScaleLogo from '@/assets/img/logos/logo-scaleai.svg';
import ServiceTitanLogo from '@/assets/img/logos/logo-servicetitan.svg';
import { getInfiniteItems } from './utils';

const SUPPORTED_BY_ITEMS = [
  {
    className: 'bg-ui-green-light',
    name: 'Guillaume Cabane',
    position: 'Co-Founder at HyperGrowth Partners',
  },
  {
    className: 'bg-ui-peach',
    name: 'Karan Mehandru',
    position: 'Managing Director at Madrona',
  },
  {
    className: 'bg-ui-blue',
    name: 'Karim Atiyeh',
    position: 'CTO at Ramp',
  },
  {
    className: 'bg-ui-green-light',
    name: 'Jean-Denis',
    position: 'Prev CTO at Plaid',
  },
  {
    className: 'bg-ui-blue',
    name: 'Rachel Wolan',
    position: 'CPO at Webflow',
  },
  {
    className: 'bg-ui-peach',
    name: 'Carilu Dietrich',
    position: 'CMO at Sprout Social',
  },
  {
    className: 'bg-ui-green-light',
    name: 'Noah Gale',
    position: 'Co-founder Tribe AI',
  },
  {
    className: 'bg-ui-blue',
    name: 'Netto Farah',
    position: 'CTO at Koala',
  },
  {
    className: 'bg-ui-green-light',
    name: 'Aaron Lee',
    position: 'CEO at Smith.ai',
  },
  {
    className: 'bg-ui-peach',
    name: 'Rajan Sheth',
    position: 'CMO at Together AI',
  },
  {
    className: 'bg-ui-blue',
    name: 'Jean Lafleur',
    position: 'COO at Airbyte',
  },
  {
    className: 'bg-ui-green-light',
    name: 'Osman Javed',
    position: 'Head of Marketing at Norm AI',
  },
  {
    className: 'bg-ui-peach',
    name: 'Henry Taylor',
    position: 'Co-Founder at Carnyx Interactive',
  },
];

const DANIEL_DETAIL = [
  {
    title: 'CTO & Co-Founder',
    subTitle: <DetailCard.SubTitle>of Canopy (Basecamp spin-off)</DetailCard.SubTitle>,
  },
  {
    title: 'Led product & web',
    subTitle: <DetailCard.SubTitle>at IFFTTT, serving millons of user</DetailCard.SubTitle>,
  },
  {
    title: 'EIR for Techstars\'',
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

const MARCEL_DETAIL = [
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

      <div className='flex justify-center gap-4 lg:gap-8 2xl:gap-[54px] mt-8 lg:mt-10 lg:max-w-min lg:mx-auto lg:relative'>
        <div className='relative group'>
          <ImageCard
            className='z-[2]'
            title='Marcel Santilli'
            subtitle='CEO & Co-Founder'
            imgSrc={MarcelImage.src}
            imgAlt='marcel-santilli'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-ui-black/50 group-hover:opacity-100 opacity-0 transition-all backdrop-blur-sm z-30'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Image src={ScaleLogo} alt='Scale AI' width={100} height={22} />
              </div>
              <div>
                <Image src={DeepgramLogo} alt='Deepgram' width={100} height={22} />
              </div>
              <div>
                <Image src={ServiceTitanLogo} alt='ServiceTitan' width={100} height={22} />
              </div>
              <div>
                <Image src={HashiCorpLogo} alt='HashiCorp' width={100} height={22} />
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <ImageCard
            className='z-[2]'
            title='Daniel Lopes'
            subtitle='CTO & Co-Founder'
            imgSrc={DanielImage.src}
            imgAlt='daniel-lopes'
          />
        </div>
        <Icons />
      </div>

      <ExpertsCarousel />

      <h3 className='font-clash-display font-[500] text-[20px] lg:text-[24px] leading-[114%] tracking-normal text-center mt-16 lg:mt-[64px] max-w-[321px] lg:max-w-[739px] mx-auto'>
        Supported by a world-class team of growth leaders, operators, and technical experts
      </h3>
      <div>

      <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto">
        {SUPPORTED_BY_ITEMS.map((item, index) => (
          <div key={`supported-by-${index}`} className={`w-[166px] px-4 py-2 rounded-full flex flex-col justify-start items-center text-center flex-grow-0`}>
            <div className={`w-12 h-6 rounded-t-full ${item.className}`}></div>
            <p className="font-elza font-medium text-base mt-2">{item.name}</p>
            <p className="font-elza font-normal text-xs flex-grow-0">{item.position}</p>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
}
