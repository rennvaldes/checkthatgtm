import { IconProps } from '@/static/types';

function ChevronThick({ className }: IconProps) {
  return (
    <svg
      className={className}
      width='11'
      height='10'
      viewBox='0 0 11 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.65155 5.35617L7.60541 3.40234L8.16365 3.96058L5.65155 6.47268L3.1395 3.96058L3.69773 3.40234L5.65155 5.35617Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default ChevronThick;
