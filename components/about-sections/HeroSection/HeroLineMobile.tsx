type Props = {
  className?: string;
};

export default function HeroLineMobile({ className }: Props) {
  return (
    <svg
      className={className}
      width='121'
      height='216'
      viewBox='0 0 121 216'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 3H1C32.2041 3 57.5 28.2959 57.5 59.5V86C57.5 102.569 70.9315 116 87.5 116V116C104.069 116 117.5 129.431 117.5 146V186.5V216'
        stroke='url(#paint0_linear_1378_18496)'
        stroke-width='6'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1378_18496'
          x1='-1.606e-06'
          y1='-41'
          x2='109.519'
          y2='153.934'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#33FF9D' stop-opacity='0' />
          <stop offset='1' stop-color='#33FF9D' />
        </linearGradient>
      </defs>
    </svg>
  );
}
