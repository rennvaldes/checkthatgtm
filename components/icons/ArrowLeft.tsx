import { IconProps } from '@/static/types';

function ArrowLeft({ className }: IconProps) {
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
          d="M9.06694 3.30762L2.375 9.99956L9.06694 16.6915L9.95082 15.8076L4.76777 10.6246H18.625V9.37456H4.76777L9.95082 4.1915L9.06694 3.30762Z"
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

export default ArrowLeft;
