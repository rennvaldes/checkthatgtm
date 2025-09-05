import React from 'react';
import Image from 'next/image';
import ContentLayout from '@/components/layout/ContentLayout';
import Spacer from '@/components/common/Spacer';

const HelpedGrowSection = () => {
  // Logos data from the original component
  const allLogos = [
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte', height: 26 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp', height: 20 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg', alt: 'Strapi', height: 19 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow', height: 19 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg', alt: 'Reddit', height: 27 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks', height: 17 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram', height: 22 },
    { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan', height: 25 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_gitpod_2e24380a04.svg', alt: 'Gitpod', height: 26 },
    { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_superhuman_type_40816d8a7a.svg', alt: 'Superhuman', height: 12.5 }
  ];

  // Repeat logos to create 30 items (6 columns x 5 rows)
  const repeatedLogos = [];
  const totalItems = 30;
  for (let i = 0; i < totalItems; i++) {
    repeatedLogos.push(allLogos[i % allLogos.length]);
  }
  return (
    <>
      <section id="customers" className="scroll-mt-24 md:scroll-mt-28">
        <div className="container mx-auto px-4">
          <ContentLayout
            leftContent={
              <div className="text-lg font-medium">
                Customers
              </div>
            }
            rightContent={
              <div className="w-full">
                <h2 className="text-3xl tracking-tighter lg:text-5xl mb-8 xl:mb-14">
                  Trusted by brilliant teams of all sizes <br /> 
                  <span className="text-primary-gray">
                    Join the world’s best operators
                  </span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-200 overflow-hidden">
                  {repeatedLogos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-center p-4 md:p-6 border border-gray-200 transition-colors duration-300"
                    >
                      <div style={{ height: `${logo.height}px`, display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={120}
                          height={logo.height}
                          className="w-auto h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
};

export default HelpedGrowSection;