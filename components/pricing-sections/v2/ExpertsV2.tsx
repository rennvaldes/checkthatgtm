"use client";

import Image from "next/image";
import ContentLayout from "@/components/layout/ContentLayout";
import expertsData from "@/components/pricing-sections/ExpertsSection/expertsData";
import TeamMemberCard from "@/components/common/TeamMemberCard";

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
                    <TeamMemberCard
                      key={`experts-v2-${expert.name}`}
                      name={expert.name}
                      title={expert.description}
                      image={expert.picture}
                      grayscale
                      rightSlot={
                        <>
                          {expert.desktopImages.slice(0, 1).map((img) => (
                            <Image key={`${img.src}-top`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                          ))}
                          <div className="text-[#B9B9B9] text-[18px] font-light leading-none">x</div>
                          {expert.desktopImages.slice(1, 2).map((img) => (
                            <Image key={`${img.src}-bottom`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                          ))}
                        </>
                      }
                    />
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
                    <TeamMemberCard
                      key={`experts-v2-mt-${expert.name}`}
                      name={expert.name}
                      title={expert.description}
                      image={expert.picture}
                      grayscale
                      wrapperClassName="w-[260px]"
                      imageAspectClass="aspect-[4/3]"
                      imageSizes="260px"
                      titleClassName="text-lg text-[#303030] mt-1 tracking-tight"
                      rightSlot={
                        <>
                          {expert.mobileImages.slice(0, 1).map((img) => (
                            <Image key={`${img.src}-top`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                          ))}
                          <div className="text-[#B9B9B9] text-sm font-light leading-none">x</div>
                          {expert.mobileImages.slice(1, 2).map((img) => (
                            <Image key={`${img.src}-bottom`} src={img.src} alt={img.alt} width={img.width} height={img.height} />
                          ))}
                        </>
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

    </section>
  );
}

