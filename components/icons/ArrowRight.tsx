import { IconProps } from '@/static/types';

function ArrowRight({ className }: IconProps) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <g clipPath='url(#clip0_134_1416)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.4331 3.30811L18.125 10L11.4331 16.692L10.5492 15.8081L15.7322 10.625H1.875V9.37505H15.7322L10.5492 4.19199L11.4331 3.30811Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_134_1416'>
          <rect width='20' height='20' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRight;
