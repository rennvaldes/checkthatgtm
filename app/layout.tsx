import type { Metadata } from 'next';
import Script from 'next/script';

import ConditionalNavbar from '@/components/layout/ConditionalNavbar';
import ConditionalFooter from '@/components/layout/ConditionalFooter';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import { clashDisplay, messinaSans } from '@/assets/fonts';
import PostHogPageView from '@/components/analytics/PostHogPageView';
import '@/static/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}`
      : 'http://localhost:3555'
  ),
  title: 'CheckThat: The Public Record of AI Visibility',
  description:
    'Powerful AI workflows. Forward-deployed experts. One system that turns content into compounding organic growth.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630,
      alt: 'CheckThat: The Public Record of AI Visibility',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630,
      alt: 'CheckThat: The Public Record of AI Visibility',
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
        {/* <Script id="koala-pixel" strategy="afterInteractive">
          {`
            !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_dbe3717899d890f5dabc90f4d55a27db1243/sdk.js"),(document.body || document.head).appendChild(n)}();
          `}
        </Script> */}
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
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "7407172";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        {/* End LinkedIn Insight Tag */}
        {/* HubSpot Embed Code */}
        {/* <Script
          id="hs-script-loader"
          src="//js-na3.hs-scripts.com/341940338.js"
          strategy="afterInteractive"
          async
          defer
        /> */}
        {/* End HubSpot Embed Code */}
        {/* Twitter conversion tracking base code */}
        {/* <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','q6cct');
          `}
        </Script> */}
        {/* End Twitter conversion tracking base code */}
      </head>
      <body
        className={`${clashDisplay.variable} ${messinaSans.variable} font-messina-sans bg-white text-foreground text-[14px] font-normal leading-none overflow-x-hidden`}>
        {/* LinkedIn Insight Tag (noscript) */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7407172&fmt=gif" />
        </noscript>
        {/* End LinkedIn Insight Tag (noscript) */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KH6VJSL7"
                  height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>
          <PostHogPageView />
          <ConditionalNavbar />
          {children}
          <ConditionalFooter />
        </Providers>
      </body>
    </html>
  );
}
