import { BlogRoot } from "@/components/blog/blogRoot";
import { CtaSection } from "@/components/home/footer";
import { getMainDataAndArticles } from "@/lib/api/strapi/blog";
import { getCardFromStrapiRawData } from "@/lib/utils";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogIndexPage() {
  // Fetch articles from Strapi
  const rawData = await getMainDataAndArticles();

  const articles = rawData?.data?.articles?.map(getCardFromStrapiRawData) ?? [];

  // Derive categories from actual articles (only show categories with content)
  const categories = Array.from(new Set(articles.map((a: { category: string }) => a.category)));

  return (
    <main className="relative flex flex-col items-center">
      <BlogRoot articles={articles} categories={categories} />
      <CtaSection />
    </main>
  );
}
