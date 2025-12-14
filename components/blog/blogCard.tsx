"use client";

import { cn } from "@/lib/litebox-lib/utils/cn";
import { CardData } from "@/static/types";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = CardData & {
  variant?: "regular" | "featured";
  className?: string;
  slug?: string;
};

export function BlogCard({
  variant = "regular",
  slug,
  image,
  image_alt,
  category,
  title,
  description,
  publisher_avatar,
  publisher_name,
  publisher_legend,
  className,
}: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${slug}`}
        className={cn("group block relative p-4", className)}
      >
        {/* Mobile: VStack with "Highlight" label */}
        <div className="md:hidden">
          <p className="text-xs mb-4 leading-7 text-muted-foreground ">
            Highlight
          </p>
          <div className="relative w-full" style={{ aspectRatio: "10/11" }}>
            <Image
              src={image}
              alt={image_alt || title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="p-2 pt-5">
            <div className="mb-8 md:mb-12">
              <div className="flex items-start justify-between gap-2 mb-3 md:mb-5">
                <h3 className="text-[20px] font-[520] leading-[1.25] tracking-[-0.03em] md:text-[36px] line-clamp-2 flex-1">
                  {title}
                </h3>
                <span className="text-[20px] md:text-[36px] mt-0.5 flex-shrink-0">→</span>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-3">
                <span className="flex px-3 py-1 h-9 w-fit items-center justify-center text-xs leading-[1.5] tracking-[-0.03em] border-[.5px] border-primary rounded-full md:text-sm">
                  {category}
                </span>
              </div>
            </div>
            {description && (
              <p className="text-base leading-[1.5] tracking-[-0.03em] md:text-[18px] line-clamp-3 mb-12">
                {description}
              </p>
            )}
            <div className="flex items-center gap-2">
              <picture className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={publisher_avatar}
                  alt={publisher_name}
                  fill
                  className="object-cover"
                />
              </picture>
              <div className="flex items-center gap-1 text-sm md:text-[18px] tracking-[-0.04em]">
                <span>{publisher_name}</span>
                {publisher_legend && (
                  <>
                    <span>·</span>
                    <span className="text-muted-foreground">
                      {publisher_legend}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet+: HStack 50/50 */}
        <div className="hidden md:flex items-center gap-12">
          <div className="relative w-1/2" style={{ aspectRatio: "10/11" }}>
            <Image
              src={image}
              alt={image_alt || title}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="mb-8 md:mb-12">
              <div className="flex items-start justify-between gap-2 mb-3 md:mb-5">
                <h3 className="text-[20px] font-[520] leading-[1.25] tracking-[-0.03em] md:text-[36px] line-clamp-2 flex-1">
                  {title}
                </h3>
                <span className="text-[20px] md:text-[36px] mt-0.5 flex-shrink-0">→</span>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-3">
                <span className="flex px-3 py-1 h-9 w-fit items-center justify-center text-xs leading-[1.5] tracking-[-0.03em] border-[.5px] border-primary rounded-full md:text-sm">
                  {category}
                </span>
              </div>
            </div>
            {description && (
              <p className="text-base leading-[1.5] tracking-[-0.03em] md:text-[18px] line-clamp-3 mb-24">
                {description}
              </p>
            )}
            <div className="flex items-center gap-2">
              <picture className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={publisher_avatar}
                  alt={publisher_name}
                  fill
                  className="object-cover"
                />
              </picture>
              <div className="flex items-center gap-1 text-sm md:text-[18px] tracking-[-0.04em]">
                <span>{publisher_name}</span>
                {publisher_legend && (
                  <>
                    <span>·</span>
                    <span className="text-muted-foreground">
                      {publisher_legend}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Regular variant: 5:3 aspect ratio
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn("group relative flex flex-col p-4 lg:p-5", className)}
    >
      <picture className="relative w-full" style={{ aspectRatio: "5/3" }}>
        <Image
          src={image}
          alt={image_alt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </picture>
      <div className="flex flex-col px-2 pt-5 pb-2 lg:pt-9 lg:px-5 lg:pb-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em] line-clamp-2 flex-1">
            {title}
          </h3>
          <span className="text-2xl mt-0.5 flex-shrink-0">→</span>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-3 mb-9 md:mb-12">
          <span className="flex px-3 py-1 h-9 w-fit items-center justify-center text-xs leading-[1.5] tracking-[-0.03em] border-[.5px] border-primary rounded-full md:text-sm">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <picture className="relative w-9 h-9 rounded-full overflow-hidden">
            <Image
              src={publisher_avatar}
              alt={publisher_name}
              fill
              className="object-cover"
            />
          </picture>
          <div className="flex items-center gap-1 text-sm tracking-[-0.04em]">
            <span>{publisher_name}</span>
            {publisher_legend && (
              <>
                <span>·</span>
                <span className="text-muted-foreground">
                  {publisher_legend}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
