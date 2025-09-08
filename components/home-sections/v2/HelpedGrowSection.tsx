import React from 'react';
import Image from 'next/image';
import ContentLayout from '@/components/layout/ContentLayout';
import Spacer from '@/components/common/Spacer';

const HelpedGrowSection = () => {
  // Logos data from the original component
  const allLogos = [
    { src: '/customers/customer-surge.png', alt: 'Surge' },
    { src: '/customers/customer-webflow.png', alt: 'Webflow' },
    { src: '/customers/customer-reddit.png', alt: 'Reddit' },
    { src: '/customers/customer-ramp.png', alt: 'Ramp' },
    { src: '/customers/customer-augmentcode.png', alt: 'Augment Code' },
    { src: '/customers/customer-metronome.png', alt: 'Metronome' },
    { src: '/customers/customer-abnormal.png', alt: 'Abnormal' },
    { src: '/customers/customer-superhuman.png', alt: 'Superhuman' },
    { src: '/customers/customer-bolt.png', alt: 'Bolt' },
    { src: '/customers/customer-sentinelone.png', alt: 'SentinelOne' },
    { src: '/customers/customer-lovable.png', alt: 'Lovable' },
    { src: '/customers/customer-diligent.png', alt: 'Diligent' },
    { src: '/customers/customer-clerk.png', alt: 'Clerk' },
    { src: '/customers/customer-ambient.png', alt: 'Ambient' },
    { src: '/customers/customer-innerwell.png', alt: 'Innerwell' },
    { src: '/customers/customer-monograph.png', alt: 'Monograph' },
    { src: '/customers/customer-vapi.png', alt: 'Vapi' },
    { src: '/customers/customer-webstacks.png', alt: 'Webstacks' },
    { src: '/customers/customer-prophecy.png', alt: 'Prophecy' },
    { src: '/customers/customer-strapi.png', alt: 'Strapi' },
    { src: '/customers/customer-airbyte.png', alt: 'Airbyte' },
    { src: '/customers/customer-schoolai.png', alt: 'SchoolAI' },
    { src: '/customers/customer-udemy.png', alt: 'Udemy' },
    { src: '/customers/customer-smith.png', alt: 'Smith AI' },
    { src: '/customers/customer-homebase.png', alt: 'Homebase' },
    { src: '/customers/customer-datagrid.png', alt: 'Datagrid' },
    { src: '/customers/customer-galileo.png', alt: 'Galileo' },
    { src: '/customers/customer-sunbit.png', alt: 'Sunbit' },
    { src: '/customers/customer-exec.png', alt: 'Exec' },
    { src: '/customers/customer-coderabbit.png', alt: 'CodeRabbit' },
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {repeatedLogos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-center p-0 -mt-[1px] -ml-[1px] border border-[#D9D6D2] transition-colors duration-300"
                    >
                      <div className="h-full flex items-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={200}
                          height={200}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-auto h-full object-contain min-h-20"
                          loading="lazy"
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