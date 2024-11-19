import { IconProps } from '@/static/types';

function Menu({ className }: IconProps) {
  return (
    <svg
      className={className}
      width='24'
      height='12'
      viewBox='0 0 24 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M24 2H0V0H24V2ZM16 12H0V10H16V12Z' fill='currentColor' />
    </svg>
  );
}

export default Menu;
