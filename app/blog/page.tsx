import { BlogRoot } from "@/components/blog/blogRoot";
import { CtaSection } from "@/components/home/footer";
import contentData from "@/lib/content.json";

// Uncomment these imports when switching back to Strapi
// import { getArticleCategories, getMainDataAndArticles } from "@/lib/api/strapi/blog";
// import { getCardFromStrapiRawData } from "@/lib/utils";

export default async function BlogIndexPage() {
  // Use mock articles from content.json for testing
  const articles = contentData.blogArticles || [];

  // Extract unique categories from mock articles
  const categories = Array.from(new Set(articles.map((a: { category: string }) => a.category)));

  // TODO: Uncomment to use Strapi data instead of mock data
  // const [rawData, rawCategoriesData] = await Promise.all([
  //   getMainDataAndArticles(),
  //   getArticleCategories(),
  // ]);
  // const articles = rawData?.data?.articles?.map(getCardFromStrapiRawData) ?? [];
  // const categories = rawCategoriesData?.data?.map(({ name }: { name: string }) => name) ?? [];

  return (
    <main className="relative flex flex-col items-center">
      <BlogRoot articles={articles} categories={categories} />
      <CtaSection />
    </main>
  );
}
