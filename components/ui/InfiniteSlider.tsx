import { cn } from '@/lib/shadcn/utils';
import { Fragment, ReactNode } from 'react';

type Props = {
  className?: string;
  fullSwipeDurationMs: number;
  items: ReactNode[];
  sliderClassName?: string;
  swipeClassName?: string;
};

export default function InfiniteSlider({
  className,
  fullSwipeDurationMs,
  items,
  sliderClassName = '',
  swipeClassName = 'swipe-left',
}: Props) {
  return (
    <div className={cn('relative h-[65px] w-full overflow-hidden', className)}>
      <div className={cn(['absolute flex'], sliderClassName)}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`infinite-slider-${index}`}
            className={cn(['flex items-center gap-6', swipeClassName])}
            style={{ animationDuration: `${fullSwipeDurationMs}ms` }}>
            {items.map((item, index) => (
              <Fragment key={`slider-item-${index.toString()}`}>{item}</Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
