import { capitalize } from "lodash";

import { getWithQsParams } from "./config";

export async function getMainDataAndCaseStudies({
  ofCategory,
  titleSearch,
}: {
  ofCategory?: string;
  titleSearch?: string;
} = {}) {
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.NEXT_PUBLIC_IS_PULL_REQUEST === "true";
  const showDrafts = isLocalEnv || isPullRequest;

  return await getWithQsParams("/case-studies", {
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
      ],
    },
    ...(showDrafts ? { publicationState: 'preview' } : {}),
  });
}

export async function getCaseStudy(slug: string, showDrafts: boolean = false) {
  const data = await getWithQsParams(`/case-study/${slug}`, {
    populate: {
      featured_image: true,
      category: true,
      quote: {
        populate: {
          author_image: true,
          company_logo: true,
        },
      },
      stats: true,
      sections: true,
      meta_image: true,
      author_avatar: true,
      company_logo: true,
      related_case_studies: {
        populate: {
          featured_image: true,
          category: true,
        },
      },
    },
    ...(showDrafts ? { publicationState: 'preview' } : {}),
  });

  if (data?.data) {
    return { data: data.data };
  }
  return { data: null };
}

export async function getCaseStudyCategories() {
  return await getWithQsParams("/case-study-categories");
}
