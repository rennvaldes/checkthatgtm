import { chunk } from 'lodash';

import BlogCard from '@/components/ui/BlogCard';
import { CardData } from '@/static/types';
import NewsletterBanner from '../NewsletterBanner';
import { getPlaceholderCards } from '@/lib/utils';
import React from 'react';

type Props = {
  cardsData: CardData[];
  isLoading?: boolean;
};

function DesktopArticles({ cardsData, isLoading }: Props) {
  const [first6Cards, restCards] = React.useMemo(
    () => [
      isLoading ? getPlaceholderCards(6) : cardsData?.slice(0, 6),
      isLoading ? getPlaceholderCards(12) : cardsData?.slice(6),
    ],
    [cardsData, isLoading]
  );

  const firstRows = chunk(first6Cards, 3);
  const restRows = chunk(restCards, 3);

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mt-16 flex w-full flex-col gap-[32px] lg:max-w-[1280px] px-6 xl:px-0'>
        {firstRows.map((row, rowIndex) => (
          <div key={rowIndex} className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {row.map(card => (
              <BlogCard isLoading={isLoading} key={card.documentId} className='!mt-0 w-full' {...card} />
            ))}
          </div>
        ))}
      </div>

      <NewsletterBanner />

      <div className='mt-[120px] flex w-full flex-col gap-[32px] lg:max-w-[1280px]'>
        {restRows.map((row, rowIndex) => (
          <div key={rowIndex + firstRows.length} className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {row.map(card => (
              <BlogCard isLoading={isLoading} key={card.documentId} className='!mt-0 w-full' {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopArticles;
