"use client";
import React from "react";
import useGetQueryWithRefetchOnChange from "@/hooks/useGetQueryWithRefetchOnChange";
import BlogPageHeader from "./Header";
import BlogPageContent from "./Content";
import KeepReading from "./KeepReading";
import CTABanner from "@/components/common/CTABanner";
import { getCardFromStrapiRawData } from "@/lib/utils";
import { getArticle } from "@/lib/api/strapi/blog";
import GrowthXLogo from '@/assets/img/v2/growthx_logo.png';

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
    <main className='relative flex min-h-screen flex-col items-center justify-start pt-20 lg:pt-28' data-show-drafts={showDrafts} data-is-pull-request={isPullRequest} data-is-local-env={isLocalEnv}>
      <BlogPageHeader isLoading={isLoading} data={articleData} />
      <BlogPageContent isLoading={isLoading} content={articleData.content} data={articleData} />
      <div className='w-full max-w-[1350px] mt-16 lg:mt-24 lg:-mb-24'>
        <CTABanner
          logoSrc={GrowthXLogo}
          
          title={<>
            Get Started with
            <br className='hidden md:block' />
            AI-Led Growth
          </>}
          description={'Whether you’re a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth.'}
          primaryButton={{
            label: 'Book a call',
            href: '/book-demo',
            className: 'rounded-full'
          }}
        />
      </div>
      <KeepReading relatedArticles={articleData.related_articles} />
    </main>
  );
}
