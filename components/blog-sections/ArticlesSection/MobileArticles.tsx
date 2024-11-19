import BlogCard from '@/components/ui/BlogCard';
import { getPlaceholderCards } from '@/lib/utils';
import { CardData } from '@/static/types';
import React from 'react';
import NewsletterBanner from '../NewsletterBanner';

type Props = {
  cardsData: CardData[];
  isLoading: boolean;
};

function MobileArticles({ cardsData, isLoading }: Props) {
  const [first3Cards, restCards] = React.useMemo(
    () => [
      isLoading ? getPlaceholderCards(3) : cardsData?.slice(0, 3),
      isLoading ? getPlaceholderCards(6) : cardsData?.slice(3),
    ],
    [cardsData, isLoading]
  );

  return (
    <div className='flex w-full flex-col items-center lg:hidden'>
      <div className='mt-[40px] flex w-[320px] flex-col gap-[32px]'>
        {first3Cards.map(card => (
          <BlogCard isLoading={isLoading} key={card.id} {...card} className='!mt-0' />
        ))}
      </div>

      <NewsletterBanner />

      <div className='mt-[80px] flex w-[320px] flex-col gap-[32px]'>
        {restCards.map(card => (
          <BlogCard isLoading={isLoading} key={card.id} {...card} className='!mt-0' />
        ))}
      </div>
    </div>
  );
}

export default MobileArticles;
