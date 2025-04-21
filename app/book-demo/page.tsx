'use client';

import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const reviewsData = [
  {
    "review_body": "Your guidance and execution on this SEO journey has been invaluable and we love working with you!",
    "name": "Stacey Baer",
    "legend": "VP of Marketing, Swoogo",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Stacey_Baer_Swoogo_VP_Marketing_b086dddd58.jpeg"
  },
  {
    "review_body": "GrowthX doesn’t just hand over a playbook—they dive in and do the work for you. Marcel and his team are all about delivering real, impactful growth without adding more to your plate.",
    "name": "Bob Summers",
    "legend": "CEO, Goodcall",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Bob_Summers_Goodcall_CEO_1_fbb6692987.jpg"
  },
  {
    "review_body": "I’ll be honest—I thought content automation sounded a bit 'too good to be true,' but GrowthX proved me wrong. It's already paying huge dividends.",
    "name": "Chaz Ross-Munro",
    "legend": "Head of Marketing, Datumate",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Chaz_Ross_Munro_0541aa7b70.jpeg"
  },
  {
    "review_body": "GrowthX is the real deal for practical AI workflows. I've pulled so much value from their frameworks and applied it directly to my work. Highly recommend if you’re ready to 100X your growth workflows!",
    "name": "Francesco Garofalo",
    "legend": "Growth Engineer, Teleport",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Francesco_Garofalo_f6ee387324.jpeg"
  }
];

export default function BookDemoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

    return () => {
      document.body.classList.remove('hide-nav');
      window.removeEventListener('resize', setIframeHeight);
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
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
            src="https://forms.default.com/639407"
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
      <div className="hidden lg:flex lg:w-1/2 h-full flex-col justify-center items-center bg-ui-black text-white">
        <div className="flex flex-col items-center justify-center bg-[rgba(247,244,255,0.7)] p-4 rounded-xl">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            className="max-w-[420px] h-[340px] bg-white rounded-xl"
          >
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index} className="!flex flex-col text-black font-elza text-lg p-12">
                <div className="h-full !flex-grow !flex flex-col">
                  <p className="">{review.review_body}</p>
                  <div className="w-full flex flex-row items-center">
                    <div className="flex flex-col items-center justify-center">
                      <Image src={review.avatar} alt={review.name} width={48} height={48} className="rounded-full object-cover" />
                    </div>
                    <div className="mt-auto">
                      <p className="">{review.name}</p>
                      <p className="">{review.legend}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
