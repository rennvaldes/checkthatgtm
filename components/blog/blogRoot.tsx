"use client";

import { useMemo, useState } from "react";
import { Grid } from "@/components/home/grid/gridRoot";
import { BlogCard } from "./blogCard";
import { BlogFilters } from "./blogFilters";
import { CardData } from "@/static/types";
import { Button } from "@/components/home/button";

type BlogRootProps = {
  articles: CardData[];
  categories: string[];
};

export function BlogRoot({ articles, categories }: BlogRootProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showUpTo, setShowUpTo] = useState(9);

  // Filter articles
  const filteredArticles = useMemo(() => {
    if (selectedFilters.length === 0) return articles;
    return articles.filter((article) =>
      selectedFilters.includes(article.category)
    );
  }, [articles, selectedFilters]);

  // Split articles into sections
  const mostRecentArticles = useMemo(
    () => filteredArticles?.slice(0, 3) || [],
    [filteredArticles]
  );

  const featuredArticle = useMemo(() => {
    // For now, feature the first article
    // TODO: Add featured flag to Strapi schema
    return filteredArticles?.[0];
  }, [filteredArticles]);

  const allArticles = useMemo(
    () => filteredArticles?.slice(0, showUpTo) || [],
    [filteredArticles, showUpTo]
  );

  const hasMore = (filteredArticles?.length || 0) > showUpTo;


  return (
    <>
      {/* Section 1: Header (hardcoded) */}
      <Grid className="pt-24 md:pt-32 lg:pt-44 pb-32">
        <h1 className="col-span-full text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-muted-foreground font-regular">Read</span>
          <br />
          <span className="text-foreground font-semibold">
            Updates, interviews and stories.
          </span>
        </h1>
      </Grid>

      {/* Section 2: Filters */}
      <BlogFilters
        categories={categories}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      {/* Section 3: Most Recent Cards */}
      {mostRecentArticles.length > 0 && (
        <Grid className="py-24 md:py-32 lg:py-44">
          <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mostRecentArticles.map((article) => (
              <BlogCard
                key={article.id}
                {...article}
                variant="regular"
                slug={article.slug}
              />
            ))}
          </div>
        </Grid>
      )}

      {/* Section 4: Featured Card */}
      {featuredArticle && (
        <Grid className="py-24 md:py-32 lg:py-44">
          <div className="col-span-full">
            <BlogCard
              {...featuredArticle}
              variant="featured"
              slug={featuredArticle.slug}
            />
          </div>
        </Grid>
      )}

      {/* Section 5: All Cards Grid */}
      <div className="py-24 md:py-32 lg:py-44">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1280px]">
          <div className="flex flex-wrap relative border-l-[0.5px] border-r-[0.5px] border-border before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.5px] before:bg-border after:absolute after:inset-x-[calc(-50vw+50%)] after:bottom-0 after:h-[0.5px] after:bg-border">
            {allArticles.map((article) => (
              <div
                key={article.id}
                className="w-full md:w-1/2 lg:w-1/3 border-b-[0.5px] border-r-[0.5px] border-border"
              >
                <BlogCard {...article} variant="regular" slug={article.slug} />
              </div>
            ))}
          </div>
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              variant="secondary"
              onClick={() => setShowUpTo((prev) => prev + 9)}
            >
              Show more
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
