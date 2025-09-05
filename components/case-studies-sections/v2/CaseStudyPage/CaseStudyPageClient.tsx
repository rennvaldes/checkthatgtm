"use client";

import React from "react";
import Image from "next/image";
import useGetQueryWithRefetchOnChange from "@/hooks/useGetQueryWithRefetchOnChange";
import { getCaseStudy } from "@/lib/api/strapi/case-studies";
import { getCardFromStrapiRawData } from "@/lib/utils";
import CTABanner from "@/components/common/CTABanner";
import GrowthXLogo from "@/assets/img/v2/growthx_logo.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeUnwrapImages from "rehype-unwrap-images";
import CaseStudyBlockquote from "./Blockquote";
import QuoteHero from "./QuoteHero";
import AnimatedDescription from "./AnimatedDescription";
import ContentLayout from "@/components/layout/ContentLayout";
import Link from "next/link";
import MarkdownContent from "./Markdown";
import { Skeleton } from "@/lib/shadcn/ui/skeleton";

export default function CaseStudyPageClient({
  slug,
  showDrafts,
  isLocalEnv,
  isPullRequest,
}: {
  slug: string;
  showDrafts: boolean;
  isLocalEnv: boolean;
  isPullRequest: boolean;
}) {
  const {
    data: rawData,
    isLoading,
    isRefetching,
  } = useGetQueryWithRefetchOnChange({
    key: "case-study-data",
    getFn: () => getCaseStudy(slug || "", showDrafts),
    params: [slug, showDrafts],
  });

  const data = React.useMemo(() => {
    if (!rawData?.data) return {} as any;
    const mapped = getCardFromStrapiRawData(rawData.data);
    const normalized = {
      ...mapped,
      quote: mapped.quote
        ? {
            text: mapped.quote.quote ?? mapped.quote.text,
            author: mapped.quote.author_name ?? mapped.quote.author,
            role: mapped.quote.author_role ?? mapped.quote.role,
            author_image_url: mapped.quote.author_image_url,
            company_logo_url: mapped.quote.company_logo_url,
          }
        : undefined,
      stats: Array.isArray(mapped.stats)
        ? mapped.stats.map((s: any) => ({
            label: s.title ?? s.label,
            value: s.content ?? s.value,
          }))
        : undefined,
      sections: Array.isArray(mapped.sections)
        ? mapped.sections.map((s: any) => ({
            title: s.name ?? s.title,
            content: s.content,
            image: s.image,
            image_alt: s.image_alt,
            blocks: s.blocks,
          }))
        : undefined,
    };
    return normalized as any;
  }, [rawData]);

  const loading = isLoading || isRefetching;

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-start"
      data-show-drafts={showDrafts}
      data-is-pull-request={isPullRequest}
      data-is-local-env={isLocalEnv}
    >
      <article className="w-full max-w-[1200px] px-4">
        <div className="mb-8">
          <ContentLayout
            leftContent={
              <Link
                href="/case-study"
                className="text-primary-gray hover:text-primary-black transition-colors"
              >
                ← Back
              </Link>
            }
            rightContent={
              <div>
                {data.category ? (
                  <div className="text-sm text-primary-gray tracking-tight">
                    {typeof data.category === "string"
                      ? data.category
                      : data.category?.name}
                  </div>
                ) : null}
                {loading ? (
                  <div className="mt-2 max-w-[1288px] space-y-2">
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-10 w-2/3" />
                  </div>
                ) : (
                  (() => {
                    const rawTitle = String(data.title || "Untitled");
                    const normalized = rawTitle.replace(
                      /<br\s*\/?>(\r?\n)?/gi,
                      "\n"
                    );
                    const [firstLine, ...rest] = normalized.split("\n");
                    const secondLine = rest.join(" ").trim();
                    return (
                      <div className="mt-2 max-w-[1288px]">
                        <h1 className="text-3xl md:text-5xl xl:text-[60px] font-semibold tracking-tight text-primary-black leading-[1.02]">
                          {firstLine}
                        </h1>
                        {secondLine ? (
                          <div className="text-2xl md:text-4xl xl:text-[60px] font-semibold tracking-tight text-primary-gray leading-[1.02]">
                            {secondLine}
                          </div>
                        ) : null}
                      </div>
                    );
                  })()
                )}

                {(data.quote?.text || loading) && (
                  <div className="mt-6">
                    <QuoteHero
                      quote={data.quote?.text || ""}
                      author={data.quote?.author}
                      role={data.quote?.role}
                      authorAvatar={
                        data.quote?.author_image_url || data.author_avatar
                      }
                      companyLogo={
                        data.quote?.company_logo_url || data.company_logo
                      }
                      stats={Array.isArray(data.stats) ? data.stats : []}
                      isLoading={loading}
                    />
                  </div>
                )}
                {data.description ? (
                  <div className="mt-6">
                    <AnimatedDescription
                      text={data.description as string}
                      withBackground={false}
                    />
                  </div>
                ) : null}
              </div>
            }
          />
        </div>
        {!loading && data.content ? (
          <MarkdownContent content={data.content as string} />
        ) : null}

        {loading ? (
          <div className="max-w-none space-y-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i}>
                <ContentLayout
                  leftContent={<Skeleton className="h-6 w-24" />}
                  rightContent={
                    <div className="space-y-4">
                      <Skeleton className="h-6 w-2/3" />
                      <Skeleton className="h-6 w-1/2" />
                      <Skeleton className="h-64 w-full" />
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        ) : Array.isArray(data.sections) && data.sections.length > 0 ? (
          <div className="max-w-none space-y-14 md:space-y-20">
            {data.sections.map((sec: any, idx: number) => (
              <div key={idx}>
                <ContentLayout
                  leftContent={<div>{sec.title || ""}</div>}
                  rightContent={
                    <div>
                      {sec.image?.url ? (
                        <div className="relative w-full aspect-[16/9] bg-[#EAE8E4] my-4">
                          <Image
                            src={sec.image.url}
                            alt={sec.image_alt || sec.title || ""}
                            fill
                            sizes="(min-width: 1024px) 1200px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      {Array.isArray(sec.blocks) && sec.blocks.length > 0 ? (
                        <div className="space-y-6">
                          {sec.blocks.map((block: any, bIdx: number) => {
                            switch (block.__component) {
                              case "shared.rich-text":
                                return (
                                  <MarkdownContent
                                    key={bIdx}
                                    content={block.body as string}
                                  />
                                );
                              case "shared.blockquote":
                                return (
                                  <CaseStudyBlockquote
                                    key={bIdx}
                                    text={block.quote}
                                    cite={block.cite}
                                    role={block.role}
                                    authorAvatar={data.author_avatar}
                                    variant="article"
                                  />
                                );
                              case "shared.animated-description":
                                return (
                                  <AnimatedDescription
                                    key={bIdx}
                                    text={block.text}
                                    withBackground={false}
                                  />
                                );
                              default:
                                return null;
                            }
                          })}
                        </div>
                      ) : sec.content ? (
                        <MarkdownContent content={sec.content as string} />
                      ) : null}
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="w-full mt-16 lg:mt-24 lg:-mb-24">
          <CTABanner
            logoSrc={GrowthXLogo}
            title={
              <>
                Get Started with
                <br className="hidden md:block" />
                AI-Led Growth
              </>
            }
            description={
              "Whether you’re a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
            }
            primaryButton={{
              label: "Book a call",
              href: "/book-demo",
              className: "rounded-full",
            }}
          />
        </div>
      </article>
    </main>
  );
}
