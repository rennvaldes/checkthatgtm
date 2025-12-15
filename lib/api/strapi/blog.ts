import { capitalize } from "lodash";

import { getWithQsParams } from "./config";

export async function getMainDataAndArticles({
  ofCategory,
  titleSearch,
}: {
  ofCategory?: string;
  titleSearch?: string;
} = {}) {
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.NEXT_PUBLIC_IS_PULL_REQUEST === "true";
  const showDrafts = isLocalEnv || isPullRequest;

  console.log('[getMainDataAndArticles] Environment check:', {
    isLocalEnv,
    isPullRequest,
    showDrafts,
    env_NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV: process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV,
    env_NEXT_PUBLIC_IS_PULL_REQUEST: process.env.NEXT_PUBLIC_IS_PULL_REQUEST,
    ofCategory,
    titleSearch,
    publicationState: showDrafts ? 'preview' : 'live',
  });

  // Query articles directly with publicationState
  const articlesResult = await getWithQsParams("/articles", {
    publicationState: showDrafts ? 'preview' : 'live',
    sort: ['publishedAt:desc'],
    populate: {
      image: true,
      publisher_avatar: true,
      category: true,
    },
    filters: {
      $and: [
        {
          category: {
            name: {
              $in: ofCategory
                ? [
                    capitalize(ofCategory),
                    ofCategory.toUpperCase(),
                    ofCategory.toLowerCase(),
                  ]
                : undefined,
            },
          },
          title: {
            $containsi: titleSearch ?? undefined,
          },
        },
        // Show staging posts in local environment or pull requests
        showDrafts ? {} : { staging: { $eq: false } },
      ],
    },
  });

  console.log('[getMainDataAndArticles] Strapi response:', {
    hasArticles: !!articlesResult?.data,
    articleCount: articlesResult?.data?.length || 0,
    firstFewSlugs: articlesResult?.data?.slice(0, 5).map((a: any) => ({
      slug: a.attributes?.slug || a.slug,
      title: a.attributes?.title || a.title,
      publishedAt: a.attributes?.publishedAt || a.publishedAt,
      staging: a.attributes?.staging || a.staging,
    })),
  });

  // Transform to match old structure
  return {
    data: {
      articles: articlesResult.data,
      main_article: null, // We can fetch this separately if needed
    },
  };
}

export async function getArticle(slug: string, showDrafts: boolean = false) {
  console.log('[getArticle] Called with:', { slug, showDrafts });

  const filters = {
    $and: [
      { slug: { $eq: slug } },
      showDrafts ? {} : { staging: { $eq: false } },
    ],
  };

  console.log('[getArticle] Strapi filters:', JSON.stringify(filters, null, 2));
  console.log('[getArticle] publicationState:', showDrafts ? 'preview' : 'live');

  const data = await getWithQsParams("/articles", {
    filters,
    publicationState: showDrafts ? 'preview' : 'live',
    populate: {
      image: true,
      image_16x9: true,
      meta_image: true,
      publisher_avatar: true,
      category: true,
      related_articles: {
        populate: {
          image: true,
          publisher_avatar: true,
          category: true,
        },
      },
    },
  });

  console.log('[getArticle] Strapi response:', {
    isArray: Array.isArray(data.data),
    count: data.data?.length || 0,
    firstArticle: data.data?.[0] ? {
      id: data.data[0].id,
      slug: data.data[0].attributes?.slug,
      staging: data.data[0].attributes?.staging,
      publishedAt: data.data[0].attributes?.publishedAt,
    } : null,
  });

  // Return the first article from the array
  if (data.data && Array.isArray(data.data) && data.data.length > 0) {
    return { data: data.data[0] };
  }
  return { data: null };
}

export async function getArticleCategories() {
  return await getWithQsParams("/categories");
}
