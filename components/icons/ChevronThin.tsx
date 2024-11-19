import { IconProps } from '@/static/types';

function ChevronThin({ className, extraProps }: IconProps) {
  return (
    <svg
      {...extraProps}
      className={className}
      width='11'
      height='8'
      viewBox='0 0 11 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.0759277 1.68709L0.783035 0.97998L5.42948 5.62643L10.0759 0.97998L10.783 1.68709L5.42948 7.04064L0.0759277 1.68709Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default ChevronThin;
