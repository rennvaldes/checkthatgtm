"use client";

import { useMemo, useState, useCallback } from "react";
import { Grid } from "@/components/home/grid/gridRoot";
import { BlogFilters } from "./blogFilters";
import { AnimatedBlogGrid } from "./animatedBlogGrid";
import { CardData } from "@/static/types";
import { Button } from "@/components/home/button";

type BlogRootProps = {
  articles: CardData[];
  categories: string[];
};

export function BlogRoot({ articles, categories }: BlogRootProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showUpTo, setShowUpTo] = useState(12);

  // When no filters: show all articles with 4th as featured
  // When filters applied: show only filtered articles (no featured)
  const { gridArticles, featuredIndex } = useMemo(() => {
    const hasFilters = selectedFilters.length > 0;

    if (hasFilters) {
      // Filter articles and show all as regular (no featured)
      const filtered = articles.filter((article) =>
        selectedFilters.includes(article.category)
      );
      return { gridArticles: filtered, featuredIndex: -1 };
    }

    // No filters: show all articles with 4th as featured
    return { gridArticles: articles, featuredIndex: 3 };
  }, [articles, selectedFilters]);

  const hasMore = (gridArticles?.length || 0) > showUpTo;

  const handleShowMore = useCallback(() => {
    setShowUpTo((prev) => prev + 12);
  }, []);

  return (
    <>
      {/* Header */}
      <Grid className="pt-24 md:pt-32 lg:pt-44 pb-32">
        <h1 className="col-span-full text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-muted-foreground font-regular">Read</span>
          <br />
          <span className="text-foreground font-semibold">
            Updates, interviews and stories.
          </span>
        </h1>
      </Grid>

      {/* Filters */}
      <BlogFilters
        categories={categories}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      {/* Animated Grid - 4th article is featured when no filters applied */}
      <div className="relative w-full border-l-[0.5px] border-r-[0.5px] border-border before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.5px] before:bg-border after:absolute after:inset-x-[calc(-50vw+50%)] after:bottom-0 after:h-[0.5px] after:bg-border">
        <AnimatedBlogGrid
          articles={gridArticles}
          showUpTo={showUpTo}
          featuredIndex={featuredIndex}
        />

        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button variant="secondary" onClick={handleShowMore}>
              Show more
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
