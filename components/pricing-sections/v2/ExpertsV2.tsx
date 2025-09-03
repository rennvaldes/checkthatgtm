"use client";

import Image from "next/image";
import ContentLayout from "@/components/layout/ContentLayout";
import expertsData from "@/components/pricing-sections/ExpertsSection/expertsData";

export default function ExpertsV2() {
  const list = expertsData; // reuse existing data

  return (
    <section className="py-16 lg:py-24" id="experts-section-v2">
      <div className="container mx-auto px-4">
        <ContentLayout
          className="items-start mb-8 md:mb-12"
          leftContent={<div className="text-sm text-[#303030]">Team</div>}
          rightContent={
            <h2 className="text-black text-3xl md:text-5xl">
              Exclusive access to a <br />
              <span className="text-primary-gray">
                network of experts
              </span>
            </h2>
          }
          leftClassName="md:text-base"
          rightClassName=""
        />
      </div>

      <div className="w-full overflow-hidden">
          <div className="relative w-full hidden md:block">
            <div className="flex">
              {Array.from({ length: 3 }).map((_, groupIndex) => (
                <div
                  key={`experts-v2-desktop-group-${groupIndex}`}
                  className="swipe-left flex items-stretch gap-6 mr-6"
                  style={{ animationDuration: `${30000}ms` }}
                >
                  {list.map((expert) => (
                    <div
                      key={`experts-v2-${expert.name}`}
                      className="w-[300px] lg:w-[360px] bg-[#E6E3DE] border border-[#959595]"
                    >
                      <div className="p-2 md:p-4">
                        <div className="aspect-[3/3] relative overflow-hidden mb-4">
                          <Image
                            src={expert.picture}
                            alt={expert.name}
                            fill
                            sizes="(max-width: 1024px) 33vw, 360px"
                            className="object-cover grayscale"
                          />
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-[26px] font-semibold text-[#141414] tracking-tight">
                              {expert.name}
                            </div>
                            <div className="text-lg text-[#303030] mt-2.5 tracking-tight leading-[1.25] max-w-[175px]">
                              {expert.description}
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-2 shrink-0">
                            {expert.desktopImages.slice(0, 1).map((img) => (
                              <Image key={`${img.src}-top`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                            ))}
                            <div className="text-[#B9B9B9] text-[18px] font-light leading-none">x</div>
                            {expert.desktopImages.slice(1, 2).map((img) => (
                              <Image key={`${img.src}-bottom`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full block md:hidden">
            <div className="flex mb-6">
              {Array.from({ length: 3 }).map((_, groupIndex) => (
                <div
                  key={`experts-v2-mobile-top-${groupIndex}`}
                  className="swipe-left flex items-stretch gap-3 mr-3"
                  style={{ animationDuration: `${21000}ms` }}
                >
                  {list.slice(0, 4).map((expert) => (
                    <div
                      key={`experts-v2-mt-${expert.name}`}
                      className="w-[260px] bg-[#E6E3DE] border border-[#959595]"
                    >
                      <div className="p-2 md:p-4">
                        <div className="aspect-[4/3] relative overflow-hidden mb-3">
                          <Image
                            src={expert.picture}
                            alt={expert.name}
                            fill
                            sizes="260px"
                            className="object-cover grayscale"
                          />
                        </div>
                        <div className="p-0 flex items-start justify-between gap-3">
                          <div>
                            <div className="text-[26px] font-semibold text-[#141414] tracking-tight">
                              {expert.name}
                            </div>
                            <div className="text-lg text-[#303030] mt-1 tracking-tight">
                              {expert.description}
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-1 shrink-0">
                            {expert.mobileImages.slice(0, 1).map((img) => (
                              <Image key={`${img.src}-top`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                            ))}
                            <div className="text-[#B9B9B9] text-sm font-light leading-none">x</div>
                            {expert.mobileImages.slice(1, 2).map((img) => (
                              <Image key={`${img.src}-bottom`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

    </section>
  );
}

