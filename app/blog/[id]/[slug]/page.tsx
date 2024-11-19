'use client';

import BlogPageContent from '@/components/blog-sections/ArticlePage/Content';
import BlogPageHeader from '@/components/blog-sections/ArticlePage/Header';
import KeepReading from '@/components/blog-sections/ArticlePage/KeepReading';
import TableOfContents from '@/components/blog-sections/ArticlePage/TableOfContents';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getArticle } from '@/lib/api/strapi/blog';
import { getCardFromStrapiRawData } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ArticlePage() {
  const articleId = +usePathname().split('/')[2];

  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-article-data',
    getFn: () => getArticle(articleId),
  });

  const articleData = React.useMemo(() => (rawData ? getCardFromStrapiRawData(rawData.data[0]) : {}), [rawData]);

  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between pt-20 lg:pt-28'>
      <BlogPageHeader isLoading={isLoading} data={articleData} />
      <div className='lg:flex lg:w-full lg:max-w-[1280px] lg:items-start'>
        <BlogPageContent isLoading={isLoading} content={articleData.content} />

        <div className='lg:sticky lg:top-0 lg:w-[30%] lg:min-w-[440px] lg:flex-shrink-0 lg:pb-16'>
          <TableOfContents isLoading={isLoading} content={articleData.content} />
        </div>
      </div>
      <KeepReading relatedArticles={articleData.related_articles} />
    </main>
  );
}
