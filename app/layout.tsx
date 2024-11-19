import type { Metadata } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import { clashDisplay } from '@/assets/fonts';
import '@/static/globals.css';

export const metadata: Metadata = {
  title: 'GrowthX: AI-Powered Growth Strategy',
  description:
    'We help teams build end-to-end AI-powered, human-guided automated content workflows that actually drive growth. We have tons of results to back it up!',
  icons: {
    icon: 'icon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/cqe3ufx.css' />
      </head>
      <body
        className={`${clashDisplay.variable} font-clash-display bg-ui-white text-ui-black text-[14px] font-normal leading-none`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
