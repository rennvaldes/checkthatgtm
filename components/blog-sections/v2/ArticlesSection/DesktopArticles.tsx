import React from 'react';
import { chunk } from 'lodash';

import BlogCard from '@/components/ui/BlogCard';
import { CardData } from '@/static/types';
import CTABanner from '@/components/common/CTABanner';
import GrowthXLogo from '@/assets/img/v2/growthx_logo.png';

type Props = {
  cardsData: CardData[];
  isLoading?: boolean;
};

function DesktopArticlesV2({ cardsData, isLoading }: Props) {
  const rows = React.useMemo(() => chunk(cardsData, 2), [cardsData]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-10 flex w-full flex-col gap-20 lg:mt-16">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {row.map(card => (
                <BlogCard isLoading={isLoading} key={card.documentId} className="!mt-0 w-full" {...card} />
              ))}
            </div>
          </React.Fragment>
        ))}

        <div className="px-0 -mb-24 xl:-mb-52">
          <CTABanner
            logoSrc={GrowthXLogo}
            bgClassName="bg-[#FFD83E]"
            title={
              <>
                Get Started with
                <br className="hidden lg:block" /> AI-Led Growth
              </>
            }
            primaryButton={{ label: 'Book a Call', href: '/book-demo' }}
            description="Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopArticlesV2;
