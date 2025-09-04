"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/lib/shadcn/ui/carousel";
import KitButton from "@/components/ui/KitButton";
import ArrowRight from "@/components/icons/ArrowRight";

export type TestimonialsCarouselProps<T = any> = {
  items: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  className?: string;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<string | number, { slidesPerView: number; spaceBetween?: number }>;
  autoplayDelay?: number;
  speed?: number;
  loop?: boolean;
  pauseOnHover?: boolean;
  disableInnerPadding?: boolean;
  itemClassName?: string;
};

export default function TestimonialsCarousel<T = any>({
  items,
  renderSlide,
  className,
  spaceBetween = 24,
  slidesPerView = 1.2,
  breakpoints = {
    640: { slidesPerView: 1.5, spaceBetween: 12 },
    768: { slidesPerView: 2.0, spaceBetween: 14 },
    1024: { slidesPerView: 2.0, spaceBetween: 16 },
    1280: { slidesPerView: 2.4, spaceBetween: 16 },
    1440: { slidesPerView: 2.8, spaceBetween: 16 },
    1536: { slidesPerView: 3.0, spaceBetween: 16 },
    1728: { slidesPerView: 3.4, spaceBetween: 16 },
    1920: { slidesPerView: 3.6, spaceBetween: 18 },
    2020: { slidesPerView: 3.8, spaceBetween: 18 },
    2490: { slidesPerView: 4.6, spaceBetween: 18 },
  },
  autoplayDelay = 3000,
  speed = 1000,
  loop = true,
  pauseOnHover = true,
  disableInnerPadding = false,
  itemClassName,
}: TestimonialsCarouselProps<T>) {
  // Note: Swiper-specific props are kept for API compatibility but not used.
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselWall, setCarouselWall] = useState<"left" | "right" | undefined>();

  const handleCarouselWall = useCallback(() => {
    if (!carouselApi) return;

    const onSnapChange = () => {
      const canScrollLeft = carouselApi.canScrollPrev();
      const canScrollRight = carouselApi.canScrollNext();

      if (canScrollLeft && canScrollRight) {
        setCarouselWall(undefined);
      } else if (canScrollLeft) {
        setCarouselWall("right");
      } else if (canScrollRight) {
        setCarouselWall("left");
      } else {
        setCarouselWall(undefined);
      }
    };

    onSnapChange();
    carouselApi.on("select", onSnapChange);
    return () => {
      carouselApi.off("select", onSnapChange);
    };
  }, [carouselApi]);

  useEffect(handleCarouselWall, [handleCarouselWall]);

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <div
        className={[
          "flex flex-col gap-6",
          disableInnerPadding ? "max-w-none px-0" : "max-w-[2320px] mx-auto px-4",
        ].join(" ")}
      >
        <Carousel
          className="bg-transparent max-md:px-4"
          setApi={setCarouselApi}
          opts={{ align: "start", slidesToScroll: 1, startIndex: 0 }}
        >
          <CarouselContent className="-mr-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={`${itemClassName ?? "basis-auto"} first-of-type:pl-4 last-of-type:pr-4`}
              >
                {renderSlide(item, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex w-min gap-11">
          <KitButton
            variant="secondary"
            size="custom"
            isDisabled={carouselWall === "left"}
            onClick={() => carouselApi?.scrollPrev()}
            className="disabled:text-ui-black/40 rounded-full px-3 py-3 lg:px-4 transition-all duration-200 hover:bg-ui-black/10 active:bg-ui-black/15 hover:-translate-y-0.5"
          >
            <ArrowRight className="rotate-180 lg:w-8 lg:h-8" />
          </KitButton>
          <KitButton
            variant="secondary"
            size="custom"
            isDisabled={carouselWall === "right"}
            onClick={() => carouselApi?.scrollNext()}
            className="disabled:text-ui-black/40 rounded-full px-3 py-3 lg:px-4 transition-all duration-200 hover:bg-ui-black/10 active:bg-ui-black/15 hover:-translate-y-0.5"
          >
            <ArrowRight className="lg:w-8 lg:h-8" />
          </KitButton>
        </div>
      </div>
    </div>
  );
}
