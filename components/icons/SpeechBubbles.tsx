type Props = {
  className?: string;
};

export default function SpeechBubbles({ className }: Props) {
  return (
    <svg
      className={className}
      width='101'
      height='27'
      viewBox='0 0 101 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M100.471 0.940155H12.6236C5.65192 0.940155 0.000289917 6.5918 0.000289917 13.5635C0.000289917 20.5351 5.65193 26.1868 12.6236 26.1868H75.2241C89.1674 26.1868 100.471 14.8835 100.471 0.940155Z'
        fill='#E5E0F2'
      />
      <rect
        opacity='0.12'
        width='47.7054'
        height='2.16843'
        transform='matrix(-1 0 0 1 78.7871 7.4454)'
        fill='#20233A'
      />
      <rect
        opacity='0.12'
        width='60.7159'
        height='2.16843'
        transform='matrix(-1 0 0 1 78.7871 13.2279)'
        fill='#20233A'
      />
      <rect
        opacity='0.12'
        width='31.0808'
        height='2.16843'
        transform='matrix(-1 0 0 1 78.7871 19.0103)'
        fill='#20233A'
      />
    </svg>
  );
}
