import { IconProps } from '@/static/types';

function X({ className }: IconProps) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M1 17L17 1M1 1L17 17' stroke='currentColor' />
    </svg>
  );
}

export default X;
