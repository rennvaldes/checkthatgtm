type Props = {
  className?: string;
  rectClassname?: string;
  pathClassname?: string;
};

export default function Sparkles({ className, rectClassname, pathClassname }: Props) {
  return (
    <svg
      className={className}
      width='30'
      height='29'
      viewBox='0 0 30 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='0.569336'
        y='0.0703125'
        width='28.9124'
        height='28.9124'
        rx='14.4562'
        fill={rectClassname ? '' : '#20233A'}
        className={rectClassname}
      />
      <path
        className={pathClassname}
        d='M15.0262 7.69266L16.2343 13.3184L21.86 14.5265L16.2343 15.7345L15.0262 21.3603L13.8181 15.7345L8.19238 14.5265L13.8181 13.3184L15.0262 7.69266Z'
        fill={pathClassname ? '' : '#33FF9D'}
      />
      <path
        className={pathClassname}
        d='M20.7213 6.5531L21.124 8.42836L22.9992 8.83104L21.124 9.23373L20.7213 11.109L20.3186 9.23373L18.4434 8.83104L20.3186 8.42836L20.7213 6.5531Z'
        fill={pathClassname ? '' : '#33FF9D'}
      />
      <path
        className={pathClassname}
        d='M9.33361 17.9429L9.73629 19.8182L11.6115 20.2209L9.73629 20.6236L9.33361 22.4988L8.93092 20.6236L7.05566 20.2209L8.93092 19.8182L9.33361 17.9429Z'
        fill={pathClassname ? '' : '#33FF9D'}
      />
    </svg>
  );
}
