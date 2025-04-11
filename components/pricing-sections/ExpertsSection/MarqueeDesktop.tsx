import Image from "next/image";
import FrameImage from "@/assets/img/expertsSection/frame.png";
import { ExpertsData } from "./expertsData";

function MarqueeDesktop({
  expertsData,
  fullSwipeDurationMs = 30000,
}: {
  expertsData: ExpertsData[];
  fullSwipeDurationMs?: number;
}) {
  return (
    <div className="relative w-full mb-[7rem] overflow-hidden hidden lg:block">
      <div className="flex">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`infinite-experts-${i}`}
            className="swipe-left flex items-center gap-10 mr-10"
            style={{ animationDuration: `${fullSwipeDurationMs}ms` }}
          >
            {expertsData.map((expert, index) => (
              <div key={`${expert.name}-${index}`}>
                <div className="relative w-[25.0625rem] h-[25.5rem]">
                  <Image src={FrameImage.src} alt="" width={401} height={408} />
                  <Image
                    src={expert.picture}
                    alt={expert.name}
                    width={362}
                    height={362}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                  <div className="absolute w-[22.625rem] px-[0.8125rem] bottom-10 left-[1.2rem] z-[2] text-[#FDFDFF]">
                    <div className="flex items-center justify-between min-h-[4.875rem] gap-2">
                      <div>
                        <h4 className="text-[1.25rem] font-elza font-semibold mb-2">
                          {expert.name}
                        </h4>
                        <p className="text-sm font-elza max-w-[10rem] leading-relaxed">
                          {expert.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {expert.desktopImages.map((image) => (
                          <Image
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeDesktop;
