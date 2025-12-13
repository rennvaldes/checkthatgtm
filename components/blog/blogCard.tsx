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
  publisher_avatar,
  publisher_name,
  publisher_legend,
  className,
}: BlogCardProps) {
  if (variant === "featured") {
    return (
      <article className={cn("group relative", className)}>
        <Link href={`/blog/${slug}`} className="block">
          {/* Mobile: VStack with "Highlight" label */}
          <div className="flex flex-col gap-12 md:hidden">
            <span className="text-sm text-muted-foreground font-light">
              Highlight
            </span>
            <div className="relative w-full" style={{ aspectRatio: "10/11" }}>
              <Image
                src={image}
                alt={image_alt || title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em] flex items-center justify-between">
                {title}
                <span className="ml-2">→</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm border border-border rounded-full">
                  {category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={publisher_avatar}
                    alt={publisher_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium">{publisher_name}</span>
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
            <div className="flex flex-col gap-4 w-1/2">
              <h3 className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em] flex items-center justify-between">
                {title}
                <span className="ml-2">→</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm border border-border rounded-full">
                  {category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={publisher_avatar}
                    alt={publisher_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium">{publisher_name}</span>
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
      </article>
    );
  }

  // Regular variant: 5:3 aspect ratio
  return (
    <article className={cn("group relative", className)}>
      <Link href={`/blog/${slug}`} className="block p-5 lg:p-10">
        <div className="flex flex-col gap-4">
          <div className="relative w-full" style={{ aspectRatio: "5/3" }}>
            <Image
              src={image}
              alt={image_alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em] flex items-center justify-between">
              {title}
              <span className="ml-2">→</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm border border-border rounded-full">
                {category}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={publisher_avatar}
                  alt={publisher_name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium">{publisher_name}</span>
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
    </article>
  );
}
