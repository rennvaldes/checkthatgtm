"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { useTransition, useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { Grid } from "@/components/home/grid/gridRoot";
import { Icon } from "@iconify/react";

type BlogFiltersProps = {
  categories: string[];
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
};

type FilterPillProps = {
  category: string;
  isSelected: boolean;
  onClick: () => void;
  style: any;
  measureRef: (el: HTMLButtonElement | null) => void;
};

function FilterPill({ category, isSelected, onClick, style, measureRef }: FilterPillProps) {
  const colorSpring = useSpring({
    progress: isSelected ? 1 : 0,
    config: { tension: 300, friction: 35, precision: 0.0001 },
  });

  return (
    <a.button
      ref={measureRef}
      onClick={onClick}
      style={{
        ...style,
        position: "absolute",
        backgroundColor: colorSpring.progress.to(
          [0, 1],
          ["hsl(var(--background))", "hsl(var(--primary))"]
        ),
        color: colorSpring.progress.to(
          [0, 1],
          ["hsl(var(--foreground))", "white"]
        ),
        borderColor: colorSpring.progress.to(
          [0, 1],
          ["hsl(var(--border))", "hsl(var(--foreground))"]
        ),
        zIndex: isSelected ? 10 : 0,
      }}
      className="rounded-full px-[22px] py-[9px] lg:px-[24px] text-base lg:text-lg leading-[1.5] tracking-[-0.03em] border inline-flex items-center gap-2"
    >
      {category}
      {isSelected ? (
        <Icon icon="ri:close-line" className="w-4 h-4" />
      ) : (
        <Icon icon="ri:add-line" className="w-4 h-4" />
      )}
    </a.button>
  );
}

export function BlogFilters({
  categories,
  selectedFilters,
  onFilterChange,
}: BlogFiltersProps) {
  const [ref, { width }] = useMeasure();
  const [selectionOrder, setSelectionOrder] = useState<string[]>([]);
  const [pillWidths, setPillWidths] = useState<Record<string, number>>({});
  const [hasMeasured, setHasMeasured] = useState(false);
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Measure pill widths synchronously after layout
  useEffect(() => {
    // Force a measurement on next frame to ensure DOM is ready
    const measure = () => {
      const widths: Record<string, number> = {};
      let allMeasured = true;

      categories.forEach((category) => {
        const el = pillRefs.current[category];
        if (el) {
          widths[category] = el.offsetWidth;
        } else {
          allMeasured = false;
        }
      });

      if (allMeasured) {
        setPillWidths(widths);
        // Fade in after 300ms once measurements are complete
        setTimeout(() => setHasMeasured(true), 300);
      } else {
        // Retry if not all refs are set
        requestAnimationFrame(measure);
      }
    };

    requestAnimationFrame(measure);
  }, [categories, width]);

  // Toggle filter selection and track order
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter((f) => f !== filter));
      setSelectionOrder((prev) => prev.filter((f) => f !== filter));
    } else {
      onFilterChange([...selectedFilters, filter]);
      setSelectionOrder((prev) => [...prev, filter]);
    }
  };

  // Calculate pill positions based on selection order (Option 1)
  const gridItems = useMemo(() => {
    if (width === 0) return [];

    // Selected pills in selection order
    const selectedInOrder = selectionOrder.filter((cat) =>
      selectedFilters.includes(cat)
    );
    // Unselected pills in array order
    const unselected = categories.filter(
      (cat) => !selectedFilters.includes(cat)
    );
    const orderedCategories = [...selectedInOrder, ...unselected];

    let x = 0;
    let y = 0;

    // Determine pill height based on breakpoint
    const isDesktop = width >= 1024; // lg breakpoint
    const pillHeight = isDesktop ? 48 : 44;
    const gap = 16;

    return orderedCategories.map((category) => {
      const isSelected = selectedFilters.includes(category);
      const pillWidth = pillWidths[category] || 100; // fallback to 100px if not measured yet

      if (x + pillWidth > width && x > 0) {
        x = 0;
        y += pillHeight + gap; // pill height + vertical gap
      }

      const position = { x, y, category, isSelected };
      x += pillWidth + gap; // horizontal gap

      return position;
    });
  }, [categories, selectedFilters, selectionOrder, pillWidths, width]);

  // Animate transitions
  const transitions = useTransition(gridItems, {
    key: (item: { category: string; x: number; y: number; isSelected: boolean }) => item.category,
    from: ({ x, y }: { x: number; y: number }) => ({ x, y, opacity: 0 }),
    enter: ({ x, y }: { x: number; y: number }) => ({ x, y, opacity: 1 }),
    update: ({ x, y }: { x: number; y: number }) => ({ x, y }),
    leave: { opacity: 0 },
    config: { tension: 300, friction: 35 },
    trail: 25,
  });

  // Fade in container
  const containerSpring = useSpring({
    opacity: hasMeasured ? 1 : 0,
    config: { tension: 300, friction: 35 },
  });

  // Calculate container height
  const containerHeight = useMemo(() => {
    if (gridItems.length === 0) return 44;
    const maxY = Math.max(...gridItems.map((item) => item.y));
    const isDesktop = width >= 1024;
    const pillHeight = isDesktop ? 48 : 44;
    return maxY + pillHeight; // Just the content height, no extra padding
  }, [gridItems, width]);

  return (
    <Grid className="py-8 lg:py-16">
      {/* Label - 2 cols */}
      <div className="col-span-full md:col-span-2">
        <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
          Filter by
        </span>
      </div>

      {/* Filter pills - 10 cols */}
      <div className="col-span-full md:col-span-10 mt-4 md:mt-0">
        <a.div
          ref={ref}
          className="relative"
          style={{
            height: containerHeight,
            opacity: containerSpring.opacity,
          }}
        >
          {transitions((style, item) => (
            <FilterPill
              key={item.category}
              category={item.category}
              isSelected={item.isSelected}
              onClick={() => toggleFilter(item.category)}
              style={style}
              measureRef={(el) => {
                pillRefs.current[item.category] = el;
              }}
            />
          ))}
        </a.div>
      </div>
    </Grid>
  );
}
