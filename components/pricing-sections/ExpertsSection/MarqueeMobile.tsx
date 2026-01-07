"use client";

import Image from "next/image";
import FrameImage from "@/assets/img/expertsSection/frame.png";
import { ExpertsData } from "./expertsData";
import { useMemo } from "react";

function MarqueeMobile({
  expertsData,
  fullSwipeDurationMs = 30000,
}: {
  expertsData: ExpertsData[];
  fullSwipeDurationMs?: number;
}) {
  const expertsTop = useMemo(() => {
    return expertsData.slice(0, 4);
  }, [expertsData]);

  const expertsBottom = useMemo(() => {
    return expertsData.slice(4);
  }, [expertsData]);

  return (
    <div className="relative w-full block lg:hidden mb-20">
      <div className="flex mb-10">
        {Array.from({ length: 3 }).map((_, groupIndex) => (
          <div
            key={`infinite-experts-group-${groupIndex}`}
            className="swipe-left flex items-center gap-2 mr-2"
            style={{ animationDuration: `${fullSwipeDurationMs * 0.7}ms` }}
          >
            {expertsTop.map((expert, expertIndex) => (
              <div
                key={`group-${groupIndex}-expert-${expertIndex}-${expert.name}`}
                className="flex items-end gap-2 shrink-0 mr-2 w-69.75"
              >
                <div className="relative size-33.25 shrink-0">
                  <div>
                    <Image
                      src={FrameImage.src}
                      alt=""
                      width={133}
                      height={133}
                    />
                    <Image
                      src={expert.picture}
                      alt={expert.name}
                      width={114}
                      height={114}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {expert.mobileImages.map((image) => (
                      <Image
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                      />
                    ))}
                  </div>
                  <h4 className="text-sm font-elza text-[#20233A] font-semibold">
                    {expert.name}
                  </h4>
                  <p className="text-[0.75rem] text-[#797E9F] font-elza max-w-32 leading-tight">
                    {expert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {Array.from({ length: 3 }).map((_, groupIndex) => (
          <div
            key={`infinite-experts-group-${groupIndex}`}
            className="swipe-right flex items-center gap-2 mr-2"
            style={{ animationDuration: `${fullSwipeDurationMs * 0.9}ms` }}
          >
            {expertsBottom.map((expert, expertIndex) => (
              <div
                key={`group-${groupIndex}-expert-${expertIndex}-${expert.name}`}
                className="flex items-end gap-2 shrink-0 mr-2 w-69.75"
              >
                <div className="relative size-33.25 shrink-0">
                  <div>
                    <Image
                      src={FrameImage.src}
                      alt=""
                      width={133}
                      height={133}
                    />
                    <Image
                      src={expert.picture}
                      alt={expert.name}
                      width={114}
                      height={114}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {expert.mobileImages.map((image) => (
                      <Image
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                      />
                    ))}
                  </div>
                  <h4 className="text-sm font-elza text-[#20233A] font-semibold">
                    {expert.name}
                  </h4>
                  <p className="text-[0.75rem] text-[#797E9F] font-elza max-w-32 leading-tight">
                    {expert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeMobile;
