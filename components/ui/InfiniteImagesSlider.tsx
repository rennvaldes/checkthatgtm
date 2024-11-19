/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/litebox-lib/utils/cn';

type Props = {
  images: { src: string; height: number; }[];
  fullSwipeDurationMs?: number;
  className?: string;
};

function InfiniteImagesSlider({ images, fullSwipeDurationMs, className }: Props) {
  return (
    <div className={cn('relative h-[5rem] w-full overflow-hidden', className)}>
      <div className='absolute flex'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`infinite-image-slider-${index}`}
            className='swipe-left flex items-center gap-[40px] pr-[87.1px] lg:gap-[87.1px]'
            style={{ animationDuration: `${fullSwipeDurationMs}ms` }}>
            {images.map((image, index) => (
              <div key={`sliderImage${index}`}>
                <img
                  style={{ height: image.height }}
                  className='h-full max-w-[150px] object-cover px-[15px] py-0 last-of-type:pl-0'
                  src={image.src}
                  alt={`sliderImage${index}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteImagesSlider;
