'use client';

import BlogPageContent from '@/components/blog-sections/ArticlePage/Content';
import BlogPageHeader from '@/components/blog-sections/ArticlePage/Header';
import KeepReading from '@/components/blog-sections/ArticlePage/KeepReading';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getArticle } from '@/lib/api/strapi/blog';
import { getCardFromStrapiRawData } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ArticlePage() {
  const slug = usePathname().split('/')[2];

  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-article-data',
    getFn: () => getArticle(slug),
  });

  const articleData = React.useMemo(() => (rawData ? getCardFromStrapiRawData(rawData.data) : {}), [rawData]);

  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between pt-20 lg:pt-28'>
      <BlogPageHeader isLoading={isLoading} data={articleData} />
      <BlogPageContent isLoading={isLoading} content={articleData.content} data={articleData} />
      <KeepReading relatedArticles={articleData.related_articles} />
    </main>
  );
}