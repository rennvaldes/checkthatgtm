/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';

import React from 'react';
import { capitalize } from 'lodash';

import Input from '@/components/ui/Input';
import Check from '@/components/icons/Check';

import DesktopArticles from './DesktopArticles';
import MobileArticles from './MobileArticles';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getArticleCategories, getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { getCardFromStrapiRawData } from '@/lib/utils';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useOnEnterView from '@/lib/litebox-lib/hooks/useOnEnterView';

function ArticlesSection() {
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [searchedValue, setSearchedValue] = React.useState('');
  const [scrollDivWidth, setScrollDivWidth] = React.useState(0);
  const [showUpTo, setShowUpTo] = React.useState(10);

  const {
    data: rawData,
    isLoading,
    isRefetching,
  } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-articles',
    getFn: () =>
      getMainDataAndArticles({
        ofCategory: selectedFilter !== 'all' ? selectedFilter : undefined,
        titleSearch: searchedValue,
      }),
    params: [selectedFilter, searchedValue],
  });
  const { data: rawCategoriesData, isLoading: areCategoriesLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-articles-categories',
    getFn: getArticleCategories,
  });

  const articles = React.useMemo(() => {
    if (!rawData) return [];
    return rawData.data.articles.map(getCardFromStrapiRawData);
  }, [rawData]);

  const categories = React.useMemo(
    () => rawCategoriesData?.data.map(({ name }: { name: string }) => name) ?? [],
    [rawCategoriesData]
  );

  const filtersRef = React.useRef<any>();

  React.useEffect(() => {
    if (scrollDivWidth) {
      filtersRef.current.scrollLeft -= scrollDivWidth;
    } else {
      const newScrollDivWidth = (window.innerWidth - 320) / 2;
      setScrollDivWidth(newScrollDivWidth);
    }
  }, [scrollDivWidth]);

  useOnEnterView({
    onEnterView: () => setShowUpTo(prev => prev + 5),
    selectors: ['#footer'],
  });

  const showingArticles = React.useMemo(() => articles?.slice(0, showUpTo) || [], [articles, showUpTo]);

  return (
    <section className='mx-auto flex w-full flex-col items-center pb-[39px] pt-[64px] lg:pb-[155px]'>
      <div className='mx-auto flex w-full flex-col items-center lg:max-w-[1280px] lg:flex-row lg:justify-between'>
        <Input
          withSearchIcon
          placeholder='Search'
          className='w-[320px] lg:flex-shrink-0'
          value={searchedValue}
          onChange={setSearchedValue}
        />

        <div
          ref={filtersRef}
          className='hide-scrollbar mt-[32px] flex w-full overflow-scroll lg:mt-0 lg:w-auto lg:max-w-[900px] lg:items-center'>
          <div style={{ width: scrollDivWidth }} className='h-full flex-shrink-0 lg:hidden' />
          <p className='mr-[20px] hidden flex-shrink-0 text-[14px] font-medium lg:block'>Filter by</p>
          {(areCategoriesLoading ? ['1', '2', '3', '4', '5'] : ['all', ...categories]).map((filter: string) =>
            areCategoriesLoading ? (
              <Skeleton key={filter} className='mr-[8px] h-[40px] w-[90px] rounded-full' />
            ) : (
              <button
                onClick={() => setSelectedFilter(filter)}
                key={filter}
                aria-selected={filter == selectedFilter}
                className='mr-[8px] aria-selected:bg-ui-black transition-color focus:bg-ui-black focus:text-ui-whitest hover:bg-ui-black hover:text-ui-whitest aria-selected:text-ui-whitest group flex h-[40px] items-center rounded-full bg-[#DEDEF0] px-[16px] py-[12px] text-[14px] font-medium duration-300 aria-selected:gap-[8px]'>
                <Check className='w-0 transition-all duration-300 group-aria-selected:w-[16px] group-aria-selected:flex-shrink-0' />
                {capitalize(filter)}
              </button>
            )
          )}
        </div>
      </div>

      <DesktopArticles isLoading={isLoading || isRefetching} cardsData={showingArticles} />
      <MobileArticles isLoading={isLoading || isRefetching} cardsData={showingArticles} />
    </section>
  );
}

export default ArticlesSection;
