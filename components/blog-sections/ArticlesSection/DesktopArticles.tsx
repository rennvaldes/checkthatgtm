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
  const allCards = React.useMemo(
    () => isLoading ? getPlaceholderCards(18) : cardsData,
    [cardsData, isLoading]
  );

  const rows = chunk(allCards, 3);

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mt-16 flex w-full flex-col gap-[32px] lg:max-w-[1280px] px-6 xl:px-0'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {row.map(card => (
              <BlogCard isLoading={isLoading} key={card.documentId} className='!mt-0 w-full' {...card} />
            ))}
          </div>
        ))}
      </div>

      <NewsletterBanner />
    </div>
  );
}

export default DesktopArticles;
