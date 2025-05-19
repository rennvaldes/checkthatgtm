import DavidImage from '@/assets/img/AboutSection/david-capone.png';
import KyleImage from '@/assets/img/AboutSection/kyle-gaudreau.png';
import MaraImage from '@/assets/img/AboutSection/mara-leighton.png';
import Controls from '@/components/icons/Controls';
import Quality from '@/components/icons/Quality';
import Sparkles from '@/components/icons/Sparkles';
import SpeechBubbles from '@/components/icons/SpeechBubbles';
import { cn } from '@/lib/shadcn/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'img'>;

const AvatarImage = ({ className = '', alt, ...props }: Props) => {
  return <img className={cn(['absolute rounded-full', className])} alt={alt} {...props} />;
};

const Mara = () => {
  return (
    <>
      <Sparkles className='absolute -left-[43px] top-[376px] z-[2] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-auto xl:h-auto lg:-left-[389px] lg:top-[400px] xl:-left-[513px] xl:top-[225px]' />
      <SpeechBubbles className='absolute -left-[107px] top-[439px] w-[76px] h-[20px] lg:w-[93px] lg:h-[23px] xl:w-auto xl:h-auto lg:-left-[460px] lg:top-[459px] xl:-left-[601px] xl:top-[295px]' />
      <div className='w-[9px] h-[9px] lg:w-[11px] lg:h-[11px] absolute bg-ui-black rounded-full -left-[29px] top-[429px] z-[2] lg:-left-[378px] lg:top-[444px] xl:-left-[501px] xl:top-[285px]' />
      <AvatarImage
        src={MaraImage.src}
        alt='Mara Leighton'
        className='bg-ui-peach aspect-square w-[80px] lg:w-[98px] xl:w-[105px] top-[367px] -left-[33px] lg:top-[379px] lg:-left-[375px] xl:top-[208px] xl:-left-[498px]'
      />
    </>
  );
};

const Kyle = () => {
  return (
    <>
      <div
        className='hidden absolute h-12 w-12 rounded-full lg:top-[487px] lg:-left-[320px] lg:block xl:top-[392px] xl:-left-[382px]'
        style={{ background: 'linear-gradient(to bottom, transparent 50%, #33FF9D 50%)' }}
      />
      <div
        className='absolute h-[51px] w-[147px] lg:w-[210px] lg:h-[73px] xl:w-52 xl:h-16 top-[471px] left-[83px] lg:top-[534px] lg:-left-[487px] xl:top-[440px] xl:-left-[530px] rotate-180 lg:rotate-0'
        style={{ background: 'linear-gradient(270deg, #33FF9D 0%, #F7F4FF 68.68%)' }}
      />
      <div className='w-[6px] lg:w-[10px] xl:w-3 aspect-square absolute bg-ui-black rounded-full left-[54px] top-[510px] z-[2] lg:-left-[311px] lg:top-[577px] xl:-left-[380px] xl:top-[481px]' />
      <Controls className='absolute w-[45px] h-[29px] lg:w-auto lg:h-auto left-[11px] top-[516px] lg:-left-[391px] lg:top-[592px] xl:-left-[464px] xl:top-[492px]' />
      <AvatarImage
        src={KyleImage.src}
        alt='Kyle Gaudreau'
        className='bg-ui-blue aspect-square w-[52px] lg:w-[73px] top-[471px] left-[51px] lg:top-[532px] lg:-left-[308px] xl:top-[435px] xl:-left-[377px]'
      />
    </>
  );
};

const David = () => {
  return (
    <>
      <div className='flex items-center flex-row-reverse absolute -left-[38px] top-[624px] lg:left-[209px] lg:top-[680px] xl:left-[303px] xl:top-[510px]'>
        <span className='flex items-center w-[103px] h-[30px] lg:w-[141px] lg:h-[40px] xl:w-[152px] xl:h-[42px] font-[500] text-[8px] lg:text-xs leading-[110%] bg-ui-peach rounded-l-full py-[3.5px] lg:py-[5px] pr-[10px] lg:pr-[13px] pl-[12px] lg:pl-[12px] xl:pr-[14px] xl:pl-[18px]'>
          Content Generation Workflows
        </span>
        <Sparkles
          className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[42px] xl:h-[42px]'
          rectClassname='fill-ui-peach'
          pathClassname='fill-ui-black'
        />
      </div>
      <div className='hidden xl:block absolute w-[36px] h-[20px] bg-ui-green-light rounded-full left-[429px] top-[391px] rotate-[21deg]' />
      <div className='hidden xl:block absolute w-[25px] h-[20px] bg-ui-green-light rounded-l-full left-[407px] top-[384px] rotate-[10deg]' />
      <Quality className='w-[72px] h-[26px] lg:w-[98px] lg:h-[35px] xl:w-auto xl:h-auto absolute left-[145px] top-[592px] z-[2] lg:left-[460px] lg:top-[643px] xl:left-[578px] xl:top-[462px]' />
      <AvatarImage
        src={DavidImage.src}
        alt='David Capone'
        className='aspect-square bg-ui-blue w-[74px] lg:w-[100px] xl:w-[108px] top-[595px] left-[90px] lg:top-[646px] lg:left-[381px] xl:top-[469px] xl:left-[489px]'
      />
    </>
  );
};

export default function Experts() {
  return (
    <div className='absolute w-[108px] h-full z-[4]'>
      <Mara />
      <Kyle />
      <David />
    </div>
  );
}
