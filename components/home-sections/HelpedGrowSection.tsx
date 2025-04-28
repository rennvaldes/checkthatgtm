'use client';

import React from 'react';
import InfiniteImagesSlider from '@/components/ui/InfiniteImagesSlider';

function HelpedGrowSection() {
  // Static logos data
  const allLogos = [
    // { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/metadata_4323b9c4fd.svg', alt: 'Metadata', height: 20 },
    // { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/swoogo_logo_449d7f6b4c.svg', alt: 'Swoogo', height: 18 },
    // { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/steadily_logo_2_a9fb3f3b54.svg', alt: 'Steadily', height: 16 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_gc_ai_3258a7e45d.svg', alt: 'GC AI', height: 18 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte', height: 26 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_shaped_2b0e8914ef.svg', alt: 'Shaped', height: 24 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp', height: 20 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg', alt: 'Strapi', height: 19 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow', height: 19 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg', alt: 'Reddit', height: 27 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks', height: 17 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram', height: 22 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan', height: 25 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_abnormal_be02983bea.svg', alt: 'Abnormal', height: 16 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_gitpod_2e24380a04.svg', alt: 'Gitpod', height: 26 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_vapi_2e669925d1.svg', alt: 'Vapi', height: 19 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_superhuman_type_40816d8a7a.svg', alt: 'Superhuman', height: 12.5 }
  ];

  return (
    <section className='h-[90px] w-full pt-[20px] text-center lg:h-[145.9px] lg:pt-[20px]'>
      {/* Section Title */}
      <h3 className='font-elza text-ui-grey text-[14px] font-normal leading-[17.6px] text-opacity-80 lg:text-[16px]'>
        {"Companies We've Helped Grow"}
      </h3>
      {/* Infinite Images Slider */}
      <InfiniteImagesSlider
        fullSwipeDurationMs={30000}
        className='mt-[16px] lg:mt-[32px]'
        images={allLogos}
      />
    </section>
  );
}

export default HelpedGrowSection;
