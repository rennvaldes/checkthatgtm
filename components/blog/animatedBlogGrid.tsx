"use client";

import { useMemo } from "react";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import { useMedia } from "@/lib/hooks";
import { CardData } from "@/static/types";
import { BlogCard } from "./blogCard";

type AnimatedBlogGridProps = {
  articles: CardData[];
  showUpTo: number;
};

type GridItem = CardData & {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function AnimatedBlogGrid({
  articles,
  showUpTo,
}: AnimatedBlogGridProps) {
  // Responsive columns based on breakpoints
  const columns = useMedia<number>(
    ["(min-width: 1024px)", "(min-width: 768px)"],
    [3, 2],
    1
  );

  // Measure container width
  const [containerRef, { width: containerWidth }] = useMeasure();

  // Measure reference card height
  const [refCardRef, { height: measuredHeight }] = useMeasure();

  // Use measured height or fallback
  const cardHeight = measuredHeight || 450;

  // Limit articles to showUpTo
  const visibleArticles = useMemo(
    () => articles.slice(0, showUpTo),
    [articles, showUpTo]
  );

  // Calculate grid positions
  const gridItems = useMemo<GridItem[]>(() => {
    // Use measured width or fallback to window width if not yet measured
    const width =
      containerWidth ||
      (typeof window !== "undefined" ? window.innerWidth : 1280);

    return visibleArticles.map((article, i) => {
      const column = i % columns;
      const row = Math.floor(i / columns);
      const cardWidth = width / columns;
      const x = cardWidth * column;
      const y = cardHeight * row;

      return {
        ...article,
        x,
        y,
        width: cardWidth,
        height: cardHeight,
      };
    });
  }, [visibleArticles, columns, containerWidth, cardHeight]);

  // Animate transitions
  const transitions = useTransition(gridItems, {
    key: (item: GridItem) => item.id,
    from: ({ x, y, width, height }: GridItem) => ({
      x,
      y,
      width,
      height,
      opacity: 0,
    }),
    enter: ({ x, y, width, height }: GridItem) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
    }),
    update: ({ x, y, width, height }: GridItem) => ({
      x,
      y,
      width,
      height,
    }),
    leave: { opacity: 0 },
    config: { tension: 300, friction: 35 },
    immediate: (key: string) => key === "leave",
  });

  // Calculate container height
  const containerHeight = useMemo(() => {
    if (gridItems.length === 0) return 0;
    const rows = Math.ceil(gridItems.length / columns);
    return rows * cardHeight;
  }, [gridItems.length, columns, cardHeight]);

  return (
    <>
      {/* Invisible reference card for height measurement */}
      <div
        ref={refCardRef}
        className="invisible absolute pointer-events-none"
        style={{ width: containerWidth / columns || 300 }}
      >
        <BlogCard
          documentId="ref"
          id={0}
          slug="reference"
          image="/placeholder.jpg"
          image_alt="Reference"
          category="Strategy"
          title="Sample Long Title Text That Would Wrap To Two Lines For Measurement Purpose"
          publisher_avatar="/placeholder.jpg"
          publisher_name="Publisher"
          variant="regular"
        />
      </div>

      {/* Animated grid container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: containerHeight }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id}
            style={{
              position: "absolute",
              ...style,
            }}
          >
            <BlogCard {...item} variant="regular" slug={item.slug} />
          </a.div>
        ))}
      </div>
    </>
  );
}
