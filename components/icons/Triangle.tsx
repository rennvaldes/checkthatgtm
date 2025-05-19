type Props = {
  className?: string;
};

export default function Triangle({ className }: Props) {
  return (
    <svg
      className={className}
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M33 0L-1.44248e-06 33L33 33L33 0Z' fill='currentColor' />
    </svg>
  );
}
