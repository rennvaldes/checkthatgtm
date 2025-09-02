import React from 'react';
import ContentLayout from '@/components/layout/ContentLayout';
import revenueGrowth from '@/assets/img/v2/revenue-growth.png';
import Image from 'next/image';
import Spacer from '@/components/common/Spacer';
function HeroSection() {
  return (
    <>
      {/* First Section */}
      <section className="relative w-full">
        <Spacer size="xxl" />
        <div className="container mx-auto px-4">
          <ContentLayout
            leftClassName="mt-4"
            leftContent={<div>Experts + AI</div>}
            rightContent={
              <div>
                <h1 className="text-[96px] leading-[1.1] tracking-tight">
                  <span className="text-primary-black font-semibold">
                    Expert-led
                  </span>
                  <br />
                  <span className="text-primary-gray font-light">
                    AI-powered growth
                  </span>
                </h1>
              </div>
            }
          />
        </div>
      </section>

      {/* New Solutions Section */}
      <section>
        <Spacer size="xl" />
        <div className="container mx-auto px-4">
          <div className="gap-10 grid grid-cols-2">
            <div className="bg-primary-black p-10 min-h-[790px] flex flex-col justify-between">
              <div className="text-[#F1EEE9] text-lg tracking-tight">
                Solutions
              </div>
              <div>
                <h2 className="text-white text-[64px] leading-[0.96] font-semibold tracking-tighter mb-5">
                  We build growth engines that blend AI workflows with experts
                </h2>
                <p className="text-[#EEEEEE] text-2xl tracking-tight font-light mb-5 max-w-3xl">
                  From content to distribution to conversion
                </p>
                <a
                  href="#"
                  className="text-[#818EFF] text-2xl font-medium tracking-tight hover:underline"
                >
                  Reserve your spot
                </a>
              </div>
            </div>
            <div className="bg-primary-black p-10 min-h-[790px] flex flex-col justify-between relative overflow-hidden">
              <div className="text-[#F1EEE9] text-lg tracking-tight">
                Platform
              </div>
              <Image
                src={revenueGrowth}
                alt="Revenue Growth"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[95%] object-contain object-right-bottom"
              />
              <div>
                <h2 className="text-white text-[40px] font-semibold tracking-tight mb-5">
                  Unlock revenue growth
                </h2>
                <a
                  href="#"
                  className="text-[#818EFF] text-2xl font-medium tracking-tight hover:underline"
                >
                  Get a demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <Spacer size="xl" />
      </section>
    </>
  );
}

export default HeroSection;
