import { IconProps } from '@/static/types';

function Hashtag({ className, extraProps }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...extraProps}
    >
      <path d="M10 3L5 21" stroke="#080A0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 3L14 21" stroke="#080A0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 9H4" stroke="#080A0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 16H2" stroke="#080A0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default Hashtag;
