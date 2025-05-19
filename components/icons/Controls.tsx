type Props = {
  className?: string;
};

export default function Controls({ className }: Props) {
  return (
    <svg
      className={className}
      width='82'
      height='53'
      viewBox='0 0 82 53'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect width='80.9925' height='52.2532' transform='translate(0.701172 0.734131)' fill='#20233A' />
      <path d='M27.4813 40.5773H14.418' stroke='#656B9B' strokeWidth='0.653165' />
      <path d='M66.0174 40.5773H36.625' stroke='#656B9B' strokeWidth='0.653165' />
      <path d='M46.4231 11.838H14.418' stroke='#656B9B' strokeWidth='0.653165' />
      <path d='M66.0179 11.838L54.9141 11.838' stroke='#656B9B' strokeWidth='0.653165' />
      <path d='M61.4459 26.2076H14.418' stroke='#656B9B' strokeWidth='0.653165' />
      <path d='M47.0762 15.1038C47.0762 11.4965 50.0005 8.57214 53.6078 8.57214V15.1038H47.0762Z' fill='#FDFDFF' />
      <rect x='62.752' y='22.9418' width='6.53165' height='6.53165' fill='#33FF9D' />
      <circle cx='32.0529' cy='40.5772' r='3.26583' fill='#FFDACA' />
    </svg>
  );
}
