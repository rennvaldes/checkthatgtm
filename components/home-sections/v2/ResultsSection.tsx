"use client";

import React, { useRef, useState } from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ResultsSection() {
  const results = [
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte' },
      title: "24x",
      description: "Organic growth in one year. Published 4,000+ pages and delivered 6.5M organic visits.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp' },
      title: "10M+",
      description: "Monthly active users. Scaled content operations to support rapid user growth.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg', alt: 'Strapi' },
      title: "95%",
      description: "Increase in qualified leads. Content-driven demand generation at scale.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow' },
      title: "3.5x",
      description: "Faster content production with AI-powered workflows and expert oversight.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg', alt: 'Reddit' },
      title: "8.9/10",
      description: "Average content quality score based on audience engagement and conversion metrics.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks' },
      title: "42%",
      description: "Reduction in customer acquisition costs through optimized content distribution.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram' },
      title: "15K+",
      description: "High-intent leads generated monthly through strategic content initiatives.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan' },
      title: "#1",
      description: "Search ranking position for 85% of our targeted high-value keywords.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte' },
      title: "24x",
      description: "Organic growth in one year. Published 4,000+ pages and delivered 6.5M organic visits.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp' },
      title: "10M+",
      description: "Monthly active users. Scaled content operations to support rapid user growth.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg', alt: 'Strapi' },
      title: "95%",
      description: "Increase in qualified leads. Content-driven demand generation at scale.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow' },
      title: "3.5x",
      description: "Faster content production with AI-powered workflows and expert oversight.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg', alt: 'Reddit' },
      title: "8.9/10",
      description: "Average content quality score based on audience engagement and conversion metrics.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks' },
      title: "42%",
      description: "Reduction in customer acquisition costs through optimized content distribution.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram' },
      title: "15K+",
      description: "High-intent leads generated monthly through strategic content initiatives.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan' },
      title: "#1",
      description: "Search ranking position for 85% of our targeted high-value keywords.",
    }
  ];

  const swiperRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={
            <div className="text-lg font-medium mb-4 md:mb-0">Impact</div>
          }
          rightContent={
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1]">
                High performance strategy & production <br /> Our results speak
                for themselves
              </h2>
            </div>
          }
        />
        <Spacer size="large" />
      </div>

      <div 
        className="relative w-full py-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 12 },
            768: { slidesPerView: 2.0, spaceBetween: 14 },
            1024: { slidesPerView: 2.0, spaceBetween: 16 }, // 1024 / 520 ≈ 1.97
            1280: { slidesPerView: 2.4, spaceBetween: 16 }, // 1280 / 520 ≈ 2.46
            1440: { slidesPerView: 2.8, spaceBetween: 16 }, // 1440 / 520 ≈ 2.77
            1536: { slidesPerView: 3.0, spaceBetween: 16 }, // 1536 / 520 ≈ 2.95
            1728: { slidesPerView: 3.4, spaceBetween: 16 }, // 1728 / 520 ≈ 3.32
            1920: { slidesPerView: 3.6, spaceBetween: 18 }, // 1920 / 520 ≈ 3.69
            2020: { slidesPerView: 3.8, spaceBetween: 18 }, // good up to ~2020px
            2490: { slidesPerView: 4.6, spaceBetween: 18 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={1000}
          className="w-full"
        >
          {results.map((result, index) => (
            <SwiperSlide key={index}>
              <div 
                className="p-8 border border-[#DCD9D5] h-[540px] flex flex-col gap-40 lg:min-w-[520px] lg:max-w-[521px]"
              >
                <div className="mb-6">
                  <div className="relative h-[24px] md:h-[28px] w-full max-w-[160px]">
                    <Image
                      src={result.logo.src}
                      alt={result.logo.alt}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="w-full text-8xl font-semibold tracking-tight leading-[0.95] text-[#151515]">
                    {result.title}
                  </h3>
                  <p className="w-full text-[20px] tracking-tight text-[#303030] mt-8 text-left">
                    {result.description}
                  </p>
                </div>
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Spacer size="xl" />
    </section>
  );
}

export default ResultsSection;
