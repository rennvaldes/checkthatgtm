import type { Metadata } from 'next';
import Script from 'next/script';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import PostHogPageView from '@/components/analytics/PostHogPageView';
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
        <Script
          id="hs-script-loader"
          src="//js-na3.hs-scripts.com/341940338.js"
          strategy="afterInteractive"
          async
          defer
        />
        {/* End HubSpot Embed Code */}
        {/* Twitter conversion tracking base code */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','q6cct');
          `}
        </Script>
        {/* End Twitter conversion tracking base code */}
        {/* PostHog Analytics */}
        <Script id="posthog-analytics" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Re Ms Fs Pe Rs Cs capture Ve calculateEventProperties Ds register register_once register_for_session unregister unregister_for_session zs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Ls As createPersonProfile Ns Is Us opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing is_capturing clear_opt_in_out_capturing Os debug I js getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_EYsgKoq2jVfc6ZU11DzXDh9NZKowk1BsLefnUxZUpqI', {
              api_host: 'https://us.i.posthog.com',
              defaults: '2025-05-24',
              person_profiles: 'always'
            });
          `}
        </Script>
        {/* End PostHog Analytics */}
      </head>
      <body
        className={`${clashDisplay.variable} font-clash-display bg-ui-white text-ui-black text-[14px] font-normal leading-none`}>
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
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
