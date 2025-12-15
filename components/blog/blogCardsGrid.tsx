"use client";

import { useMemo, useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import { useMedia } from "@/lib/hooks";
import { CardData } from "@/static/types";
import { BlogCard } from "./blogCard";

type BlogCardsGridProps = {
  articles: CardData[];
  showUpTo: number;
  featuredIndex?: number;
  shouldAnimate?: boolean;
};

type GridItem = CardData & {
  x: number;
  y: number;
  width: number;
  height: number;
  isFeatured: boolean;
};

export function BlogCardsGrid({
  articles,
  showUpTo,
  featuredIndex = -1,
  shouldAnimate = false,
}: BlogCardsGridProps) {
  // Only render grid items on client to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Debounced measurements to prevent layout thrashing during resize
  const [debouncedColumns, setDebouncedColumns] = useState<number>(1);
  const [debouncedWidth, setDebouncedWidth] = useState<number>(0);

  // Responsive columns based on breakpoints
  const columns = useMedia<number>(
    ["(min-width: 1024px)", "(min-width: 768px)"],
    [3, 2],
    1
  );

  // Measure container width
  const [containerRef, { width: containerWidth }] = useMeasure();

  // Debounce measurements to wait for both columns and containerWidth to settle
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedColumns(columns);
      setDebouncedWidth(containerWidth);
    }, 50); // 50ms debounce

    return () => clearTimeout(timeout);
  }, [columns, containerWidth]);

  // Measure reference card heights (regular and featured)
  const [refCardRef, { height: measuredHeight }] = useMeasure();
  const [refFeaturedCardRef, { height: measuredFeaturedHeight }] = useMeasure();

  // Use measured height or fallback
  const cardHeight = measuredHeight || 450;
  const featuredCardHeight = measuredFeaturedHeight || 450;

  // Limit articles to showUpTo
  const visibleArticles = useMemo(
    () => articles.slice(0, showUpTo),
    [articles, showUpTo]
  );

  // Calculate grid positions (only on client)
  const gridItems = useMemo<GridItem[]>(() => {
    if (!isMounted) return [];

    // Use debounced measurements to prevent layout thrashing
    const width =
      debouncedWidth ||
      (typeof window !== "undefined" ? window.innerWidth : 1280);

    const cardWidth = width / debouncedColumns;

    // Build layout order: if featured card would leave gap, reorder to fill it
    const layoutOrder: number[] = [];
    const used = new Set<number>();
    let currentColumn = 0;

    for (let i = 0; i < visibleArticles.length; i++) {
      if (used.has(i)) continue; // Skip if already placed

      const isFeatured = i === featuredIndex;

      if (isFeatured && currentColumn > 0) {
        // Featured card mid-row: pull up cards from after featured to fill gap
        const slotsToFill = debouncedColumns - currentColumn;
        const cardsToFillWith: number[] = [];

        // Collect cards after featured to fill the gaps
        for (let j = i + 1; j < visibleArticles.length && cardsToFillWith.length < slotsToFill; j++) {
          if (!used.has(j)) {
            cardsToFillWith.push(j);
            used.add(j);
          }
        }

        // Add the filler cards
        layoutOrder.push(...cardsToFillWith);
        currentColumn += cardsToFillWith.length;

        // If we filled the row, move to next row
        if (currentColumn >= debouncedColumns) {
          currentColumn = 0;
        }

        // Place featured card on new row
        layoutOrder.push(i);
        used.add(i);

        // Featured takes full row, so move to next row
        currentColumn = 0;
      } else if (isFeatured) {
        // Featured at start of row
        layoutOrder.push(i);
        used.add(i);
        currentColumn = 0;
      } else {
        // Regular card
        layoutOrder.push(i);
        used.add(i);
        currentColumn++;
        if (currentColumn >= debouncedColumns) {
          currentColumn = 0;
        }
      }
    }

    // Now position cards based on layout order
    currentColumn = 0;
    let currentRowStartY = 0;
    let currentRowHeight = cardHeight;

    return layoutOrder.map((articleIndex) => {
      const article = visibleArticles[articleIndex];
      const isFeatured = articleIndex === featuredIndex;

      const itemWidth = isFeatured ? width : cardWidth;
      const itemHeight = isFeatured ? featuredCardHeight : cardHeight;

      const x = isFeatured ? 0 : cardWidth * currentColumn;
      const y = currentRowStartY;

      // Update row height based on tallest card in row
      if (isFeatured && itemHeight > currentRowHeight) {
        currentRowHeight = itemHeight;
      }

      // Update position for next card
      if (isFeatured) {
        // Featured card ends the row, move to next
        currentColumn = 0;
        currentRowStartY += itemHeight;
        currentRowHeight = cardHeight; // Reset for next row
      } else {
        currentColumn += 1;
        if (currentColumn >= debouncedColumns) {
          // Row complete, move to next
          currentColumn = 0;
          currentRowStartY += currentRowHeight;
          currentRowHeight = cardHeight; // Reset for next row
        }
      }

      return {
        ...article,
        x,
        y,
        width: itemWidth,
        height: itemHeight,
        isFeatured,
      };
    });
  }, [isMounted, visibleArticles, debouncedColumns, debouncedWidth, cardHeight, featuredCardHeight, featuredIndex]);

  // Animate transitions
  const transitions = useTransition(gridItems, {
    keys: (item: GridItem) => item.id,
    from: ({ x, y, width, height }: GridItem) => ({ x, y, width, height }),
    enter: ({ x, y, width, height }: GridItem) => ({ x, y, width, height }),
    update: ({ x, y, width, height }: GridItem) => ({ x, y, width, height }),
    leave: { opacity: 0 },
    config: { tension: 300, friction: 35 },
    immediate: !shouldAnimate,
  });

  // Calculate container height based on actual grid items
  const containerHeight = useMemo(() => {
    if (gridItems.length === 0) return 0;

    // Find the maximum y position + height
    const maxBottom = gridItems.reduce((max, item) => {
      const bottom = item.y + item.height;
      return Math.max(max, bottom);
    }, 0);

    return maxBottom;
  }, [gridItems]);

  return (
    <>
      {/* Invisible reference cards for height measurement */}
      {debouncedWidth > 0 && (
        <>
          <div
            ref={refCardRef}
            className="invisible absolute pointer-events-none"
            style={{ width: debouncedWidth / debouncedColumns }}
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
          <div
            ref={refFeaturedCardRef}
            className="invisible absolute pointer-events-none"
            style={{ width: debouncedWidth }}
          >
            <BlogCard
              documentId="ref-featured"
              id={0}
              slug="reference-featured"
              image="/placeholder.jpg"
              image_alt="Reference Featured"
              category="Strategy"
              title="Sample Long Title Text That Would Wrap To Two Lines For Measurement Purpose"
              description="Sample description text for measuring featured card height with all content included"
              publisher_avatar="/placeholder.jpg"
              publisher_name="Publisher"
              variant="featured"
            />
          </div>
        </>
      )}

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
            <BlogCard
              {...item}
              variant={item.isFeatured ? "featured" : "regular"}
              slug={item.slug}
              className="border-b-[0.5px] border-r-[0.5px] border-border"
            />
          </a.div>
        ))}
      </div>
    </>
  );
}
