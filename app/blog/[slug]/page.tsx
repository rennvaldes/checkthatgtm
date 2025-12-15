import React from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import BlogSlugRoot from '@/components/blogSlug/blogSlugRoot';
import { getArticle } from '@/lib/api/strapi/blog';
import { getCardFromStrapiRawData } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { data } = await getArticle(resolvedParams.slug);

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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const showDrafts = isLocalEnv || isPullRequest;

  // Fetch data server-side
  const rawData = await getArticle(slug, showDrafts);
  const articleData = rawData?.data ? getCardFromStrapiRawData(rawData.data) : {};

  // Construct URL from request headers (Next.js best practice)
  const headersList = await headers();
  const host = headersList.get('host') || 'growthx.ai';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const currentUrl = `${protocol}://${host}/blog/${slug}`;

  return (
    <BlogSlugRoot
      articleData={articleData}
      showDrafts={showDrafts}
      isLocalEnv={isLocalEnv}
      isPullRequest={isPullRequest}
      currentUrl={currentUrl}
    />
  );
}
