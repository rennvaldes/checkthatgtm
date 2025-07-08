import type { Metadata } from 'next';
import Script from 'next/script';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import { clashDisplay } from '@/assets/fonts';
import '@/static/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}`
      : 'http://localhost:3555'
  ),
  title: 'GrowthX: Expert-Led, AI‑Powered Growth',
  description:
    'We build growth engines that blend AI workflows with experts. From content to distribution to conversion.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630,
      alt: 'GrowthX: Expert-Led, AI-Powered Growth',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630,
      alt: 'GrowthX: Expert-Led, AI-Powered Growth',
    }],
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
        <Script id="koala-pixel" strategy="afterInteractive">
          {`
            !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_dbe3717899d890f5dabc90f4d55a27db1243/sdk.js"),(document.body || document.head).appendChild(n)}();
          `}
        </Script>
        <Script id="default-form" strategy="afterInteractive">
          {`(function(w,d){w.__default__={team_id:432,form_id:828228};var s=d.createElement('script');s.async=!0;s.src='https://import-cdn.default.com/v2/index.js';d.head.appendChild(s)})(window,document);`}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KH6VJSL7');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${clashDisplay.variable} font-clash-display bg-ui-white text-ui-black text-[14px] font-normal leading-none`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KH6VJSL7"
                  height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
