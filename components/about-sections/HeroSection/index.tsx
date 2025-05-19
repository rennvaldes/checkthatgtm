import Clouds from './Clouds';
import Experts from './Experts';
import HeroDots from './HeroDots';
import HeroLineDesktop from './HeroLineDesktop';
import HeroLineMobile from './HeroLineMobile';
import TitleAndButtons from './TitleAndButtons';

export default function HeroSection() {
  return (
    <section className='mt-[70px] w-full relative flex flex-col items-center h-[716px] max-h-[716px] lg:h-[814px] lg:max-h-[814px] xl:h-[652px] xl:max-h-[652px] overflow-clip'>
      <TitleAndButtons />
      <HeroDots />
      <HeroLineDesktop className='hidden lg:block absolute inset-0 w-full top-auto lg:scale-x-[80%] lg:scale-y-[61%] lg:bottom-[16px] xl:bottom-0 xl:scale-y-100 xl:scale-x-[104%]' />
      <HeroLineMobile className='lg:hidden w-full absolute inset-0 top-auto bottom-[106px] left-4' />
      <Clouds />
      <Experts />
    </section>
  );
}
