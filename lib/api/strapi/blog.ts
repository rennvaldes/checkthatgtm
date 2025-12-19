import { capitalize } from "lodash";

import { getWithQsParams } from "./config";

export async function getMainDataAndArticles({
  ofCategory,
  titleSearch,
  showDrafts,
}: {
  ofCategory?: string;
  titleSearch?: string;
  showDrafts?: boolean;
} = {}) {
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const shouldShowDrafts = showDrafts ?? (isLocalEnv || isPullRequest);

  // Query articles directly with status (Strapi v5 syntax)
  const articlesResult = await getWithQsParams("/articles", {
    status: shouldShowDrafts ? 'draft' : 'published',
    sort: ['publishedAt:desc'],
    populate: {
      image: true,
      card_image: true,
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
        shouldShowDrafts ? {} : { staging: { $eq: false } },
      ],
    },
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
  const filters = {
    $and: [
      { slug: { $eq: slug } },
      showDrafts ? {} : { staging: { $eq: false } },
    ],
  };

  const data = await getWithQsParams("/articles", {
    filters,
    status: showDrafts ? 'draft' : 'published',
    populate: {
      image: true,
      card_image: true,
      hero_image: true,
      image_16x9: true,
      meta_image: true,
      publisher_avatar: true,
      category: true,
      related_articles: {
        populate: {
          image: true,
          card_image: true,
          publisher_avatar: true,
          category: true,
        },
      },
    },
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
