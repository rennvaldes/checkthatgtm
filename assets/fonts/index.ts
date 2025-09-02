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

export const messinaSans = localFont({
  src: [
    {
      path: './MessinaSans/MessinaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MessinaSans/MessinaSans-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './MessinaSans/MessinaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './MessinaSans/MessinaSans-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './MessinaSans/MessinaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './MessinaSans/MessinaSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-messina-sans',
});
