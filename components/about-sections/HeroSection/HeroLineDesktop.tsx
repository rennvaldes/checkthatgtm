import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

export default function HeroLineDesktop(props: Props) {
  return (
    <svg width='959' height='468' viewBox='0 0 959 468' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M4 -6.10352e-05V40.5161C4 148.537 59.2969 249.039 150.542 306.855V306.855C227.403 355.558 321.557 368.682 408.807 342.853L658.337 268.985C677.26 263.383 694.894 254.108 710.232 241.689V241.689C808.452 162.16 955 232.064 955 358.445V492'
        stroke='url(#paint0_linear_1378_19713)'
        strokeWidth='8'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1378_19713'
          x1='890.402'
          y1='35'
          x2='890.402'
          y2='433'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#33FF9D' stopOpacity='0' />
          <stop offset='1' stopColor='#33FF9D' />
        </linearGradient>
      </defs>
    </svg>
  );
}
