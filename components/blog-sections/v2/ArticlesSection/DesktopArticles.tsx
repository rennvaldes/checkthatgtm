import React from 'react';
import { chunk } from 'lodash';

import BlogCard from '@/components/ui/BlogCard';
import { CardData } from '@/static/types';
import { Grid } from '@/components/home/grid/gridRoot';

type Props = {
  cardsData: CardData[];
  isLoading?: boolean;
};

function DesktopArticlesV2({ cardsData, isLoading }: Props) {
  const rows = React.useMemo(() => chunk(cardsData, 2), [cardsData]);

  return (
    <Grid className="mt-10 lg:mt-16">
      <div className="col-span-full flex w-full flex-col gap-20">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {row.map(card => (
                <BlogCard isLoading={isLoading} key={card.documentId} className="!mt-0 w-full" {...card} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </Grid>
  );
}

export default DesktopArticlesV2;
