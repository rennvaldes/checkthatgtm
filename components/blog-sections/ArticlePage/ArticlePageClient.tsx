"use client";
import React from "react";
import useGetQueryWithRefetchOnChange from "@/hooks/useGetQueryWithRefetchOnChange";
import BlogPageHeader from "./Header";
import BlogPageContent from "./Content";
import KeepReading from "./KeepReading";
import NewsletterBanner from "@/components/blog-sections/NewsletterBanner";
import { getCardFromStrapiRawData } from "@/lib/utils";
import { getArticle } from "@/lib/api/strapi/blog";

export default function ArticlePageClient({ slug, showDrafts, isLocalEnv, isPullRequest }: {
  slug: string;
  showDrafts: boolean;
  isLocalEnv: boolean;
  isPullRequest: boolean;
}) {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-article-data',
    getFn: () => getArticle(slug || '', showDrafts),
  });

  const articleData = React.useMemo(() => (rawData ? getCardFromStrapiRawData(rawData.data) : {}), [rawData]);

  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between pt-20 lg:pt-28' data-show-drafts={showDrafts} data-is-pull-request={isPullRequest} data-is-local-env={isLocalEnv}>
      <BlogPageHeader isLoading={isLoading} data={articleData} />
      <BlogPageContent isLoading={isLoading} content={articleData.content} data={articleData} />
      <div className='w-full mb-12'>
        <NewsletterBanner />
      </div>
      <KeepReading relatedArticles={articleData.related_articles} />
    </main>
  );
}