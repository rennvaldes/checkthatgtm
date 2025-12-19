import { capitalize } from "lodash";

import { getWithQsParams } from "./config";

export async function getMainDataAndArticles({
  ofCategory,
  titleSearch,
}: {
  ofCategory?: string;
  titleSearch?: string;
} = {}) {
  // Show staging articles on local dev and PR preview environments
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const showStaging = isLocalEnv || isPullRequest;

  // Always show only published articles (hide drafts everywhere)
  const articlesResult = await getWithQsParams("/articles", {
    status: 'published',
    sort: ['createdAt:desc'],
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
        // Show staging posts on local dev and PR previews, hide on production
        showStaging ? {} : { staging: { $eq: false } },
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

export async function getArticle(slug: string) {
  // Show staging articles on local dev and PR preview environments
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const showStaging = isLocalEnv || isPullRequest;

  const filters = {
    $and: [
      { slug: { $eq: slug } },
      // Show staging posts on local dev and PR previews, hide on production
      showStaging ? {} : { staging: { $eq: false } },
    ],
  };

  const data = await getWithQsParams("/articles", {
    filters,
    status: 'published',
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
