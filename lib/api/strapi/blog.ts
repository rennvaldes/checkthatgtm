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

  return await getWithQsParams("/blog", {
    populate: {
      articles: {
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
      },
      main_article: {
        populate: {
          image: true,
          publisher_avatar: true,
          category: true,
        },
        filters: showDrafts ? {} : { staging: { $eq: false } },
      },
    },
  });
}

export async function getArticle(slug: string, showDrafts: boolean = false) {
  const data = await getWithQsParams("/articles", {
    filters: {
      $and: [
        { slug: { $eq: slug } },
        showDrafts ? {} : { staging: { $eq: false } },
      ],
    },
    populate: {
      image: true,
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

  // Return the first article from the array
  if (data.data && Array.isArray(data.data) && data.data.length > 0) {
    return { data: data.data[0] };
  }
  return { data: null };
}

export async function getArticleCategories() {
  return await getWithQsParams("/categories");
}
