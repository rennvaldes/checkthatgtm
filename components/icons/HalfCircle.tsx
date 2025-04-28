import { IconProps } from "@/static/types";

function HalfCircle({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,0 A25.5,25.5 0 0,1 0,51 L0,0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default HalfCircle;
