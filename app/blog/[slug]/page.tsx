import React from 'react';
import { Metadata } from 'next';
import ArticlePageClient from '@/components/blog-sections/ArticlePage/ArticlePageClient';
import { getArticle } from '@/lib/api/strapi/blog';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = await getArticle(params.slug);
  
  if (!data) {
    return {
      title: 'GrowthX Blog',
      description: 'GrowthX Blog Articles',
    };
  }

  const fields = data.attributes || data;
  const { meta_title, meta_description, meta_image, image_16x9, image, title, description } = fields;

  const imageUrl = (meta_image && meta_image.url) || (image_16x9 && image_16x9.url) || (image && image.url);
  const ogImage = imageUrl
    ? [{
        url: imageUrl,
        width: (meta_image && meta_image.width) || 1200,
        height: (meta_image && meta_image.height) || 630,
        alt: meta_title || title,
      }]
    : undefined;

  return {
    title: meta_title || title,
    description: meta_description || description,
    openGraph: {
      title: meta_title || title,
      description: meta_description || description,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta_title || title,
      description: meta_description || description,
      images: imageUrl ? [imageUrl] : undefined,
    },
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
