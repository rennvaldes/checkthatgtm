"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import Image from "next/image";

export default function ResultsSection() {
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
    { src: '/customers/customer-baseten.png', alt: 'BaseTen' },
  ];

  // Use the first 30 logos directly
  const logosToRender = allLogos.slice(0, 30);
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>The Results</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Results</span>
                <br />
                <span className="text-primary-gray">Speak</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  We went from zero to &gt;$11M run rate in under a year. All organic growth. No ads. No traditional marketing.
                </p>

                <div className="my-12 bg-[#E6E3DE] border border-primary-gray p-4 md:p-6 lg:p-8 overflow-hidden group">
                  <Image
                    src="/img/pages/growthx-client-portfolio-traction-momentum.png"
                    alt="GrowthX client portfolio showing proven traction and momentum across multiple B2B SaaS companies"
                    width={1920}
                    height={1080}
                    className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  <strong>How?</strong> The same way we help our clients: by consistently delivering value and earning trust.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6 font-semibold">
                  Current clients include:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-none -ml-px">
                  {logosToRender.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-0 -mt-px -ml-px border border-[#D9D6D2] transition-colors duration-300"
                    >
                      <div className="h-full flex items-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={200}
                          height={200}
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16.7vw"
                          className="w-auto h-full object-contain min-h-20"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
