import React from 'react';
import { Metadata } from 'next';
import ArticlePageClient from '@/components/blog-sections/ArticlePage/ArticlePageClient';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (params.slug === 'series-a') {
    return {
      title: 'GrowthX Raises $12m Series A',
      description: 'GrowthX AI raises $12M to scale platform that captures how experts actually work',
      openGraph: {
        title: 'GrowthX Raises $12m Series A',
        description: 'GrowthX AI raises $12M to scale platform that captures how experts actually work',
        images: [{
          url: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/Growth_X_Series_A_AI_growth_platform_v2_fcb67dbba5.jpg',
          width: 1200,
          height: 630,
          alt: 'Your image alt text',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'GrowthX Raises $12m Series A',
        description: 'GrowthX AI raises $12M to scale platform that captures how experts actually work',
        images: ['https://glowing-rainbow-627a62133d.media.strapiapp.com/Growth_X_Series_A_AI_growth_platform_v2_fcb67dbba5.jpg'],
      },
    };
  }

  return {
    title: 'GrowthX Blog',
    description: 'GrowthX Blog Articles',
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const showDrafts = isLocalEnv || isPullRequest;

  return (
    <ArticlePageClient
      slug={slug}
      showDrafts={showDrafts}
      isLocalEnv={isLocalEnv}
      isPullRequest={isPullRequest}
    />
  );
}
