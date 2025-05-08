import { capitalize } from 'lodash';

import { getWithQsParams } from './config';

export async function getMainDataAndArticles({
  ofCategory,
  titleSearch,
}: {
  ofCategory?: string;
  titleSearch?: string;
} = {}) {
  return await getWithQsParams('/blog', {
    populate: {
      articles: {
        populate: {
          image: true,
          publisher_avatar: true,
          category: true,
        },
        filters: {
          category: {
            name: {
              $in: ofCategory
                ? [capitalize(ofCategory), ofCategory.toUpperCase(), ofCategory.toLowerCase()]
                : undefined,
            },
          },
          title: {
            $containsi: titleSearch ?? undefined,
          },
        },
      },
      main_article: {
        populate: {
          image: true,
          publisher_avatar: true,
          category: true,
        },
      },
    },
  });
}

export async function getArticle(slug: string) {
  const data = await getWithQsParams('/articles', {
    filters: {
      slug: {
        $eq: slug
      }
    },
    populate: "*"
  });
  
  // Return the first article from the array
  if (data.data && Array.isArray(data.data) && data.data.length > 0) {
    return { data: data.data[0] };
  }
  return { data: null };
}

export async function getArticleCategories() {
  return await getWithQsParams('/categories');
}
