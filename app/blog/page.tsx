import { BlogRoot } from "@/components/blog/blogRoot";
import { CtaSection } from "@/components/home/footer";
import { getArticleCategories, getMainDataAndArticles } from "@/lib/api/strapi/blog";
import { getCardFromStrapiRawData } from "@/lib/utils";
import { BlogPageWrapper } from "@/components/blog/blogAnimations";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogIndexPage() {
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const showDrafts = isLocalEnv || isPullRequest;

  // Fetch articles and categories from Strapi in parallel
  const [rawData, rawCategoriesData] = await Promise.all([
    getMainDataAndArticles({ showDrafts }),
    getArticleCategories(),
  ]);

  const articles = rawData?.data?.articles?.map(getCardFromStrapiRawData) ?? [];
  const categories = rawCategoriesData?.data?.map(({ name }: { name: string }) => name) ?? [];

  return (
    <BlogPageWrapper>
      <main className="relative flex flex-col items-center">
        <BlogRoot articles={articles} categories={categories} />
        <CtaSection />
      </main>
    </BlogPageWrapper>
  );
}
