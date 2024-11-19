import Image from 'next/image';
import { PropsWithChildren } from 'react';

import mountain from '@/assets/img/mountain.webp';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import CornerDeco from '@/components/icons/CornerDecoration';

function HeroLine() {
  return (
    <svg
      className='text-ui-green-light absolute bottom-0 right-0 z-20 h-[187px] w-full lg:h-auto lg:w-auto'
      width='959'
      height='430'
      viewBox='0 0 959 430'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 0V40.5162C4 148.537 59.2969 249.039 150.542 306.855V306.855C227.403 355.558 321.557 368.682 408.807 342.853L658.337 268.985C677.26 263.383 694.894 254.108 710.232 241.689V241.689C808.452 162.16 955 232.064 955 358.445V492'
        stroke='url(#paint0_linear_202_2678)'
        strokeWidth='8'
      />
      <defs>
        <linearGradient
          id='paint0_linear_202_2678'
          x1='890.402'
          y1='35.0001'
          x2='890.402'
          y2='433'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='currentColor' stopOpacity='0' />
          <stop offset='1' stopColor='currentColor' />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RectangleWithCircle() {
  return (
    <svg
      width='139'
      height='84'
      viewBox='0 0 139 84'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='text-ui-green-light absolute bottom-[84px] left-0'>
      <path d='M0 0H97C120.196 0 139 18.804 139 42C139 65.196 120.196 84 97 84H0V0Z' fill='currentColor' />
    </svg>
  );
}

function DecorationsAndContainer({ children }: PropsWithChildren) {
  const { isDesktop } = useResponsiveDevice();

  return (
    <div className='relative mx-auto flex h-[187px] w-[340px] justify-center lg:right-[30px] lg:h-[385px] lg:w-[1043px]'>
      {isDesktop && <RectangleWithCircle />}
      <HeroLine />
      {isDesktop && <CornerDeco className='text-ui-peach absolute right-[-58px] top-[99px]' />}
      {isDesktop && (
        <Image
          width={306}
          height={306}
          priority
          alt='A black and white mountain peak'
          src={mountain}
          className='absolute bottom-[-119px] left-[136px] z-10'
        />
      )}
      <Image
        width={isDesktop ? 679 : 327}
        height={isDesktop ? 679 : 269}
        priority
        alt='A black and white mountain peak'
        src={mountain}
        className='absolute bottom-[-137px] right-[5px] z-40 lg:bottom-[-279px] lg:right-[162px]'
      />
      {isDesktop && (
        <Image
          width={255}
          height={255}
          priority
          alt='A black and white mountain peak'
          src={mountain}
          className='absolute bottom-[-122px] right-[17px] z-10'
        />
      )}
      {children}
    </div>
  );
}

export default DecorationsAndContainer;
