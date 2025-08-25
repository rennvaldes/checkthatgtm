'use client';

import { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Quotes from '@/components/icons/Quotes';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import Image from 'next/image';
import { trackDemoBooking } from '@/lib/utils/twitter-tracking';
import { trackDemoPageVisit, POSTHOG_EVENTS, trackPostHogEvent } from '@/lib/utils/posthog-tracking';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const reviewsData = [
  {
    "review_body": "Your guidance and execution on this SEO journey has been invaluable and we love working with you!",
    "name": "Stacey Baer",
    "legend": "VP of Marketing, Swoogo",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Stacey_Baer_Swoogo_VP_Marketing_b086dddd58.jpeg"
  },
  {
    "review_body": "I'll be honest—I thought content automation sounded a bit 'too good to be true,' but GrowthX proved me wrong. It's already paying huge dividends.",
    "name": "Chaz Ross-Munro",
    "legend": "Head of Marketing, Datumate",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Chaz_Ross_Munro_0541aa7b70.jpeg"
  },
  {
    "review_body": "GrowthX is the real deal for practical AI workflows. I've pulled so much value from their frameworks and applied it directly to my work. Highly recommend if you're ready to 100X your growth workflows!",
    "name": "Francesco Garofalo",
    "legend": "Growth Engineer, Teleport",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Francesco_Garofalo_f6ee387324.jpeg"
  }
];

const allLogos = [
  { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow', height: 19 },
  { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_reddit_white_ebfbb73438.svg', alt: 'Reddit', height: 27 },
  { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp', height: 20 },
  { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_white_0bac569aa4.svg', alt: 'Strapi', height: 20 },
  // { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_gc_ai_3258a7e45d.svg', alt: 'GC AI', height: 16 },
  { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte', height: 26 },
  // { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_shaped_2b0e8914ef.svg', alt: 'Shaped', height: 24 },
  { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks', height: 17 },
  { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram', height: 22 },
  { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan', height: 25 },
  // { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_abnormal_be02983bea.svg', alt: 'Abnormal', height: 16 },
  // { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_gitpod_2e24380a04.svg', alt: 'Gitpod', height: 26 },
];

export default function BookDemoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('https://forms.default.com/639407');

  const paginationRef = useRef(null);
  const { isDesktop } = useResponsiveDevice();

  useEffect(() => {
    document.body.classList.add('hide-nav');

    const setIframeHeight = () => {
      const iframe = document.getElementById('form-iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.style.height = `${window.innerHeight}px`;
      }
    };

    setIframeHeight();
    window.addEventListener('resize', setIframeHeight);

    // Track Twitter conversion for demo booking page visit
    trackDemoBooking();
    
    // Track PostHog demo page visit
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = Object.fromEntries(urlParams.entries());
    trackDemoPageVisit(document.referrer, utmParams);

    return () => {
      document.body.classList.remove('hide-nav');
      window.removeEventListener('resize', setIframeHeight);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = urlParams.toString();
    setIframeSrc(`https://forms.default.com/639407?${utmParams}`);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
    // Track when the demo form actually loads
    trackPostHogEvent(POSTHOG_EVENTS.DEMO_FORM_LOADED, {
      category: 'conversion',
      page: '/book-demo'
    });
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-full lg:w-1/2 h-full overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-ui-white z-50">
            <div className="animate-pulse text-ui-black">Loading...</div>
          </div>
        )}
        
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-ui-white">
            <div className="text-red-500">
              Failed to load the booking form. Please try again later or contact support.
            </div>
          </div>
        ) : (
          <iframe 
            id="form-iframe"
            src={iframeSrc}
            className="w-full h-full border-0"
            title="Book a Demo"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            allowFullScreen
          />
        )}
      </div>
      <div className="hidden lg:flex lg:w-1/2 h-full flex-col justify-center items-center bg-ui-black text-white pt-[15dvh] overflow-hidden relative">
        <img src="/demo-line-decoration.svg" alt="Line Decortion" className="absolute top-0 left-0 min-w-[70%] max-w-[90%] max-h-[40dvh] select-none pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 translate-x-[100%] -translate-y-[80%] w-[160px] h-[520px] pt-2 bg-gradient-to-b from-[#33FF9D] from-[21.19%] to-[#20233A] to-[56.51%] select-none pointer-events-none" aria-hidden="true">
          <img src="/balloon.png" alt="Balloon Decoration" className="w-full h-auto select-none pointer-events-none" aria-hidden="true" />
        </div>
        <div className="demo-dotted-pattern absolute top-[18dvh] left-[3dvh] w-[25dvh] h-[35dvh]"></div>
        <div className="flex flex-col items-center justify-center bg-[rgba(247,244,255,0.7)] p-3 rounded-2xl relative">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true, el: paginationRef.current }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }}
            className="max-w-[420px] h-[320px] bg-white rounded-2xl"
          >
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index} className="text-black font-elza text-lg cursor-grab active:cursor-grabbing px-12 py-8">
                <div className="h-full flex flex-col">
                  <div className="flex-grow">
                    <Quotes className="text-ui-black mb-4" />
                    <p className="text-lg">{review.review_body}</p>
                  </div>
                  <div className="w-full flex flex-row items-center">
                    <div className="flex flex-col items-center justify-center">
                      <Image src={review.avatar} alt={review.name} width={52} height={52} className="rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col ml-2 gap-0.5">
                      <p className="text-base font-medium">{review.name}</p>
                      <p className="text-sm -mt-1 opacity-75">{review.legend}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div id="custom-pagination-container" ref={paginationRef} className="flex flex-row items-center gap-2 mt-4 justify-center">
          {reviewsData.map((review, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 bg-white rounded-full transition-opacity ${index === 0 ? 'opacity-100' : 'opacity-50'}`}
            ></div>
          ))}
        </div>
        <div className="flex flex-col gap-8 items-center justify-center mt-16 max-w-[600px] mx-auto px-4">
          <p className="text-sm text-white/75">Trusted by</p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
            {allLogos.map((logo, index) => (
              <img 
                src={logo.src} 
                alt={logo.alt} 
                key={index} 
                className={`w-auto ${logo.alt !== 'Reddit' && logo.alt !== 'Strapi' ? 'brightness-0 invert' : ''}`} 
                style={{ height: logo.height }} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
