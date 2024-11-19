'use client';

import { cn } from '@/lib/litebox-lib/utils/cn';
import { useEffect, useRef, useState } from 'react';

type Props = {
  className?: string;
  dotsSeparationPx?: { horizontal: number; vertical: number };
  dotStartingWidthPx?: number;
  dotWidthPxIncreasePerRow?: number;
  dotPatternTopPaddingPx?: number;
  dotsColorStyle?: string;
};

function DotPatternBackground({
  className,
  dotsSeparationPx = { horizontal: 74, vertical: 80 },
  dotStartingWidthPx = 2,
  dotWidthPxIncreasePerRow = 0.5,
  dotPatternTopPaddingPx = 149,
  dotsColorStyle = 'bg-ui-blue',
}: Props) {
  const patternRef = useRef<HTMLElement>();
  const [dotsAmount, setDotsAmount] = useState(0);
  const [rowsAmount, setRowsAmount] = useState(0);

  useEffect(() => {
    if (!patternRef.current) return;

    const { offsetHeight } = patternRef.current;

    const onResize = () => {
      if (patternRef.current) {
        const screenWidth = patternRef.current.offsetWidth;
        const patternHeight = offsetHeight - dotPatternTopPaddingPx;
        setDotsAmount(Math.floor(screenWidth / dotsSeparationPx.horizontal));
        setRowsAmount(Math.round(patternHeight / dotsSeparationPx.vertical));
      }
    };

    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [dotPatternTopPaddingPx, dotsSeparationPx]);

  return (
    <span
      ref={patternRef as any}
      style={{ gap: dotsSeparationPx.vertical, paddingTop: dotPatternTopPaddingPx }}
      className={cn('absolute left-0 top-0 -z-20 flex h-full w-full flex-col px-[21px]', className)}>
      {Array.from({ length: rowsAmount }).map((_, rowIndex) => (
        <span className='flex justify-between' key={`row-${rowIndex}`}>
          {Array.from({ length: dotsAmount }).map((_, dotIndex) => (
            <span
              key={`dot-${dotIndex}`}
              style={{
                width: dotStartingWidthPx + dotWidthPxIncreasePerRow * rowIndex,
                height: dotStartingWidthPx + dotWidthPxIncreasePerRow * rowIndex,
              }}
              className={cn('h-auto w-auto', dotsColorStyle)}
            />
          ))}
        </span>
      ))}
    </span>
  );
}

export default DotPatternBackground;
