import localFont from 'next/font/local';

export const clashDisplay = localFont({
  src: [
    {
      path: './ClashDisplay/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ClashDisplay/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ClashDisplay/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
});
