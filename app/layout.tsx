import type { Metadata } from 'next';
import Script from 'next/script';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import { clashDisplay } from '@/assets/fonts';
import '@/static/globals.css';

export const metadata: Metadata = {
  title: 'GrowthX: Expert-Led, AI‑Powered Growth',
  description:
    'We build growth engines that blend AI workflows with experts. From content to distribution to conversion.',
  icons: {
    icon: 'icon.svg',
  },
  openGraph: {
    images: ['/assets/img/social.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/img/social.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/cqe3ufx.css' />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K82TVE12FG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K82TVE12FG');
          `}
        </Script>
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
