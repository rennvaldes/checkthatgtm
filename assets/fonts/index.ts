import localFont from 'next/font/local';

export const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
});

export const messinaSans = localFont({
  src: [
    {
      path: '../../public/fonts/MessinaSans/MessinaSansComplete-VF-Upright.ttf',
      weight: '300 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MessinaSans/MessinaSansComplete-VF-Italic.ttf',
      weight: '300 900',
      style: 'italic',
    },
  ],
  variable: '--font-messina-sans',
});

export const livretText = localFont({
  src: [
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Light Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Medium Italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial DemiBold Italic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './TT_LIVRET_TEXT/TT Livret Text Trial Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-livret-text',
});
