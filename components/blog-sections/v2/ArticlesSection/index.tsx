'use client';

import React from 'react';
import { capitalize } from 'lodash';

import Button from '@/components/common/Button';
import { Icon } from '@iconify/react';
import Search from '@/components/icons/Search';
import { Grid } from '@/components/home/grid/gridRoot';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getArticleCategories, getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { getCardFromStrapiRawData } from '@/lib/utils';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useOnEnterView from '@/lib/litebox-lib/hooks/useOnEnterView';
import DesktopArticles from './DesktopArticles';


function ArticlesSectionV2() {
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [searchedValue, setSearchedValue] = React.useState('');
  const [showUpTo, setShowUpTo] = React.useState(10);

  const {
    data: rawData,
    isLoading,
    isRefetching,
  } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-articles-v2',
    getFn: () =>
      getMainDataAndArticles({
        ofCategory: selectedFilter !== 'all' ? selectedFilter : undefined,
        titleSearch: searchedValue,
      }),
    params: [selectedFilter, searchedValue],
  });
  const { data: rawCategoriesData, isLoading: areCategoriesLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-articles-categories-v2',
    getFn: getArticleCategories,
  });

  const articles = React.useMemo(() => {
    if (!rawData) return [] as any[];
    return rawData.data.articles.map(getCardFromStrapiRawData);
  }, [rawData]);

  const categories = React.useMemo(
    () => rawCategoriesData?.data.map(({ name }: { name: string }) => name) ?? [],
    [rawCategoriesData]
  );

  useOnEnterView({
    onEnterView: () => setShowUpTo(prev => prev + 5),
    selectors: ['#footer'],
  });

  const showingArticles = React.useMemo(() => articles?.slice(0, showUpTo) || [], [articles, showUpTo]);

  return (
    <section className='pb-10 pt-10 lg:pb-[120px] lg:pt-[56px]'>
      <Grid>
        <div className='col-span-full flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='w-[320px] lg:flex-shrink-0'>
            <div className='flex items-center gap-2 border-b-[0.5px] border-border pb-2'>
              <Search className='h-5 w-5 lg:h-6 lg:w-6 text-primary-gray' />
              <input
                value={searchedValue}
                onChange={(e) => setSearchedValue(e.target.value)}
                placeholder='Search'
                className='w-full bg-transparent text-primary-black placeholder:text-primary-gray focus:outline-none text-base lg:text-lg'
              />
            </div>
          </div>

          <div className='hide-scrollbar flex w-full overflow-x-auto lg:w-auto lg:flex-1 lg:items-center lg:justify-end gap-3'>
            <p className='hidden flex-shrink-0 text-sm text-muted-foreground lg:block'>Filter by</p>
            {(areCategoriesLoading ? ['1', '2', '3', '4', '5'] : ['all', ...categories]).map((filter: string) =>
              areCategoriesLoading ? (
                <Skeleton key={filter} className='h-[40px] w-[120px] rounded-full bg-foreground/10' />
              ) : (
                <button
                  onClick={() => setSelectedFilter(filter)}
                  key={filter}
                  className={[
                    'rounded-full font-normal inline-flex items-center gap-2 px-4 py-2 text-sm transition-all flex-shrink-0 border border-border',
                    filter === selectedFilter
                      ? 'bg-background text-foreground'
                      : 'bg-background text-foreground opacity-50 hover:opacity-70'
                  ].join(' ')}
                >
                  {capitalize(filter)}
                  <Icon icon="ri:add-line" className="w-4 h-4" />
                </button>
              )
            )}
          </div>
        </div>
      </Grid>
      
      <DesktopArticles isLoading={isLoading || isRefetching} cardsData={showingArticles} />
    </section>
  );
}

export default ArticlesSectionV2;
