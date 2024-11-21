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
    <div className='hidden w-full flex-col items-center lg:flex'>
      <div className='mt-[64px] flex w-full flex-col gap-[32px] lg:max-w-[1280px]'>
        {firstRows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex justify-between'>
            {row.map(card => (
              <BlogCard isLoading={isLoading} key={card.documentId} className='!mt-0 w-[405px]' {...card} />
            ))}
          </div>
        ))}
      </div>

      <NewsletterBanner />

      <div className='mt-[120px] flex w-full flex-col gap-[32px] lg:max-w-[1280px]'>
        {restRows.map((row, rowIndex) => (
          <div key={rowIndex + firstRows.length} className='flex justify-between'>
            {row.map(card => (
              <BlogCard isLoading={isLoading} key={card.documentId} className='!mt-0 w-[405px]' {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopArticles;
