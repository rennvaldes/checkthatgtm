import { IconProps } from '@/static/types';

function Close({ className }: IconProps) {
  return (
    <svg
      className={className}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.4145 10.0002L19.374 2.04068L17.9598 0.626465L10.0002 8.58602L2.04068 0.626465L0.626465 2.04068L8.58602 10.0002L0.626465 17.9598L2.04068 19.374L10.0002 11.4145L17.9598 19.374L19.374 17.9598L11.4145 10.0002Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default Close;
