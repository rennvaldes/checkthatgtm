type Props = {
  className?: string;
};

export default function Line({ className }: Props) {
  return (
    <svg
      className={className}
      width='383'
      height='416'
      viewBox='0 0 383 416'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M-9 560V560C-0.557768 560 6.28602 553.156 6.28602 544.714L6.28603 474.371C6.28603 427.079 44.6237 388.741 91.9155 388.741H281C336.228 388.741 381 343.969 381 288.741L381 -15'
        stroke='url(#paint0_linear_1340_8503)'
        strokeWidth='4'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1340_8503'
          x1='11.2437'
          y1='543.04'
          x2='433.931'
          y2='50.008'
          gradientUnits='userSpaceOnUse'>
          <stop offset='0.121657' stopColor='#4400FF' stopOpacity='0' />
          <stop offset='0.733733' stopColor='#4400FF' />
          <stop offset='0.874483' stopColor='#4400FF' stopOpacity='0.1' />
        </linearGradient>
      </defs>
    </svg>
  );
}
