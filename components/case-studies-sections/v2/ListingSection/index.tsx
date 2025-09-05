'use client';

import React from 'react';
import { capitalize } from 'lodash';

import Button from '@/components/common/Button';
import { Icon } from '@iconify/react';
import Search from '@/components/icons/Search';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getCaseStudyCategories, getMainDataAndCaseStudies } from '@/lib/api/strapi/case-studies';
import { getCardFromStrapiRawData } from '@/lib/utils';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useOnEnterView from '@/lib/litebox-lib/hooks/useOnEnterView';
import DesktopGrid from './DesktopGrid';

function CaseStudiesListingSection() {
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [searchedValue, setSearchedValue] = React.useState('');
  const [showUpTo, setShowUpTo] = React.useState(12);

  const { data: rawData, isLoading, isRefetching } = useGetQueryWithRefetchOnChange({
    key: 'case-studies-data',
    getFn: () =>
      getMainDataAndCaseStudies({
        ofCategory: selectedFilter !== 'all' ? selectedFilter : undefined,
        titleSearch: searchedValue,
      }),
    params: [selectedFilter, searchedValue],
  });

  const { data: rawCategoriesData, isLoading: areCategoriesLoading } = useGetQueryWithRefetchOnChange({
    key: 'case-studies-categories',
    getFn: getCaseStudyCategories,
  });

  React.useEffect(() => {
    if (rawData) {
      console.log('[CaseStudies] rawData', rawData);
    }
  }, [rawData]);

  React.useEffect(() => {
    if (rawCategoriesData) {
      console.log('[CaseStudies] rawCategoriesData', rawCategoriesData);
    }
  }, [rawCategoriesData]);

  const caseStudies = React.useMemo(() => {
    if (!rawData) return [] as any[];
    const list = Array.isArray(rawData.data)
      ? rawData.data
      : rawData.data?.case_studies ?? [];
    const normalized = list.map((item: any) =>
      item?.attributes ? { id: item.id, ...item.attributes } : item
    );
    return normalized.map(getCardFromStrapiRawData);
  }, [rawData]);

  const categories = React.useMemo(
    () => rawCategoriesData?.data.map(({ name }: { name: string }) => name) ?? [],
    [rawCategoriesData]
  );

  useOnEnterView({
    onEnterView: () => setShowUpTo(prev => prev + 6),
    selectors: ['#footer'],
  });

  const showingItems = React.useMemo(() => caseStudies?.slice(0, showUpTo) || [], [caseStudies, showUpTo]);

  return (
    <section className='mx-auto w-full pb-10 pt-10 lg:pb-[120px] lg:pt-[56px] max-md:px-4'>
      <div className='mx-auto w-full container'>
        <div className='flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='w-[320px] lg:flex-shrink-0'>
            <div className='flex items-center gap-2 border-b border-primary-gray pb-2'>
              <Search className='h-5 w-5 lg:h-6 lg:w-6 text-primary-gray' />
              <input
                value={searchedValue}
                onChange={(e) => setSearchedValue(e.target.value)}
                placeholder='Search'
                className='w-full bg-transparent text-primary-black placeholder:text-primary-gray focus:outline-none text-base lg:text-lg'
              />
            </div>
          </div>

          <div className='hide-scrollbar flex w-full overflow-x-auto lg:w-auto lg:max-w-[900px] lg:items-center'>
            <p className='mr-[20px] hidden flex-shrink-0 text-xl font-semibold tracking-tight text-primary-gray lg:block'>Filter by</p>
            {(areCategoriesLoading ? ['1', '2', '3', '4', '5'] : ['all', ...categories]).map((filter: string) =>
              areCategoriesLoading ? (
                <Skeleton key={filter} className='mr-[8px] h-[40px] w-[90px] rounded-full' />
              ) : (
                <Button
                  onClick={() => setSelectedFilter(filter)}
                  key={filter}
                  variant={filter === selectedFilter ? 'secondary' : 'outline'}
                  size='sm'
                  className={[
                    'mr-[8px] my-2 rounded-full font-medium ',
                    filter === selectedFilter ? '' : '!border-0 text-ui-black bg-[#e1ddd8]'
                  ].join(' ')}
                >
                  <span className='inline-flex items-center text-lg gap-4'>
                    {capitalize(filter)}
                    {filter === selectedFilter ? (
                      <Icon icon='ri:check-fill' className='w-4 h-4' />
                    ) : null}
                  </span>
                </Button>
              )
            )}
          </div>
        </div>

        {/* {showingItems.length === 0 && !(isLoading || isRefetching) ? (
          <div className='mt-10 text-center text-primary-gray'>
            No case studies found. Try clearing filters or search.
          </div>
        ) : (
          <DesktopGrid isLoading={isLoading || isRefetching} cardsData={showingItems} />
        )} */}
      </div>
    </section>
  );
}

export default CaseStudiesListingSection;
