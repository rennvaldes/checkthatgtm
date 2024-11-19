import { IconProps } from "@/static/types";

function CornerDeco({className}: IconProps) {
  return (
    <svg
      className={className}
      width='51'
      height='51'
      viewBox='0 0 51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 0C0 28.1665 22.8335 51 51 51V0H0Z' fill='currentColor' />
    </svg>
  );
}

export default CornerDeco