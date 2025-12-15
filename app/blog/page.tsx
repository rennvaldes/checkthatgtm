import { BlogRoot } from "@/components/blog/blogRoot";
import { CtaSection } from "@/components/home/footer";
import { getArticleCategories, getMainDataAndArticles } from "@/lib/api/strapi/blog";
import { getCardFromStrapiRawData } from "@/lib/utils";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogIndexPage() {
  // Fetch articles and categories from Strapi in parallel
  const [rawData, rawCategoriesData] = await Promise.all([
    getMainDataAndArticles(),
    getArticleCategories(),
  ]);

  const articles = rawData?.data?.articles?.map(getCardFromStrapiRawData) ?? [];
  const categories = rawCategoriesData?.data?.map(({ name }: { name: string }) => name) ?? [];

  return (
    <main className="relative flex flex-col items-center">
      <BlogRoot articles={articles} categories={categories} />
      <CtaSection />
    </main>
  );
}
