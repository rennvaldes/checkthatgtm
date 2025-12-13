import { BlogRoot } from "@/components/blog/blogRoot";
import { CtaSection } from "@/components/home/footer";
import {
  getArticleCategories,
  getMainDataAndArticles,
} from "@/lib/api/strapi/blog";
import { getCardFromStrapiRawData } from "@/lib/utils";

export default async function BlogIndexPage() {
  // Fetch data on the server
  const [rawData, rawCategoriesData] = await Promise.all([
    getMainDataAndArticles(),
    getArticleCategories(),
  ]);

  // Transform articles
  const articles = rawData?.data?.articles?.map(getCardFromStrapiRawData) ?? [];

  // Get categories
  const categories =
    rawCategoriesData?.data?.map(({ name }: { name: string }) => name) ?? [];

  return (
    <main className="relative flex flex-col items-center">
      <BlogRoot articles={articles} categories={categories} />
      <CtaSection />
    </main>
  );
}
