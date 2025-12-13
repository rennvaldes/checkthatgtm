"use client";

import { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
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
};

function FilterPill({ category, isSelected, onClick }: FilterPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  const springs = useSpring({
    progress: isSelected || isHovered ? 1 : 0,
    rotate: isSelected ? 405 : 0,
    config: { tension: 300, friction: 35, clamp: true },
  });

  return (
    <a.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: springs.progress.to(
          [0, 1],
          ["hsl(38, 22%, 93%)", "hsl(38, 22%, 0%)"]
        ),
        borderColor: "hsl(var(--primary))",
        borderWidth: "0.5px",
        borderStyle: "solid",
        color: springs.progress.to(
          [0, 1],
          ["hsl(38, 22%, 0%)", "hsl(38, 22%, 93%)"]
        ),
      }}
      className="rounded-full pl-[22px] pr-[14px] py-[9px] lg:pl-[24px] lg:pr-[16px] text-base lg:text-lg leading-[1.5] tracking-[-0.03em] inline-flex items-center gap-2 relative"
    >
      <span>{category}</span>
      <a.span
        style={{
          display: "inline-flex",
          transform: springs.rotate.to((r) => `rotate(${r}deg)`),
        }}
      >
        <Icon icon="ri:add-line" className="w-4 h-4" />
      </a.span>
    </a.button>
  );
}

export function BlogFilters({
  categories,
  selectedFilters,
  onFilterChange,
}: BlogFiltersProps) {
  const [hasMounted, setHasMounted] = useState(false);

  // Fade in after mount
  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const containerSpring = useSpring({
    opacity: hasMounted ? 1 : 0,
    config: { tension: 300, friction: 35 },
  });

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter((f) => f !== filter));
    } else {
      onFilterChange([...selectedFilters, filter]);
    }
  };

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
          className="flex flex-wrap gap-4"
          style={{
            opacity: containerSpring.opacity,
          }}
        >
          {categories.map((category) => (
            <FilterPill
              key={category}
              category={category}
              isSelected={selectedFilters.includes(category)}
              onClick={() => toggleFilter(category)}
            />
          ))}
        </a.div>
      </div>
    </Grid>
  );
}
