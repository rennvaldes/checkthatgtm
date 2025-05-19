import CloudsImg from '@/assets/img/AboutSection/clouds.png';

export default function Clouds() {
  return (
    <>
      <div className='absolute h-full lg:hidden z-[3]'>
        <div
          className='relative w-[calc(1920px_*_2)] h-[578px] -left-[7%] top-[20%] bg-repeat-x'
          style={{ backgroundImage: `url(${CloudsImg.src})` }}
        />
      </div>
      <div
        className='hidden lg:block absolute w-full h-full bg-repeat-x z-[3] [background-position:-55px_138px] lg:[background-position:center_220px] xl:[background-position:center_76px]'
        style={{ backgroundImage: `url(${CloudsImg.src})` }}
      />
    </>
  );
}
