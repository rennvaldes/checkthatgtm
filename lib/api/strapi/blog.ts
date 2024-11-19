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

export async function getArticle(id: number) {
  return await getWithQsParams('/blog-articles', {
    filters: {
      id: {
        $eq: [id],
      },
    },
    populate: {
      image: true,
      publisher_avatar: true,
      category: true,
      content: true,
      related_articles: {
        populate: {
          image: true,
          publisher_avatar: true,
          category: true,
        },
      },
    },
  });
}

export async function getArticleCategories() {
  return await getWithQsParams('/blog-article-categories');
}
