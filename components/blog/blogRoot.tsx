"use client";

import { useMemo, useState } from "react";
import { useTransition, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
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

  // Masonry grid for All Cards section
  const [ref, { width }] = useMeasure();
  const columns = width < 768 ? 1 : width < 1024 ? 2 : 3;

  const [heights, gridItems] = useMemo(() => {
    if (width === 0) return [[], []];

    let heights = new Array(columns).fill(0);
    const cardHeight = 400; // Approximate card height

    let gridItems = allArticles.map((article) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = heights[column];
      heights[column] += cardHeight + 32; // card height + gap

      return {
        ...article,
        x,
        y,
        width: width / columns - 16, // subtract gap
        height: cardHeight,
      };
    });

    return [heights, gridItems];
  }, [columns, allArticles, width]);

  const transitions = useTransition(gridItems, {
    key: (item: any) => item.id,
    from: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 0,
    }),
    enter: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
    }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

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

      {/* Section 5: All Cards Grid with masonry animations */}
      <div className="py-24 md:py-32 lg:py-44">
        <div
          ref={ref}
          className="relative mx-auto px-6 max-w-[1440px]"
          style={{ height: Math.max(...heights, 0) }}
        >
          {transitions((style, item) => (
            <a.div
              key={item.id}
              style={{
                ...style,
                position: "absolute",
              }}
            >
              <BlogCard {...item} variant="regular" slug={item.slug} />
            </a.div>
          ))}
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
