import React from "react";
import BlogSlugHeader from "./blogSlugHeader";
import BlogSlugContent from "./blogSlugContent";
import BlogSlugKeepReading from "./blogSlugKeepReading";
import { CtaSection } from "@/components/home/footer";

interface BlogSlugRootProps {
  articleData: any;
  showDrafts: boolean;
  isLocalEnv: boolean;
  isPullRequest: boolean;
  currentUrl: string;
}

export default function BlogSlugRoot({
  articleData,
  showDrafts,
  isLocalEnv,
  isPullRequest,
  currentUrl,
}: BlogSlugRootProps) {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-start pt-[122px] md:pt-0"
      data-show-drafts={showDrafts}
      data-is-pull-request={isPullRequest}
      data-is-local-env={isLocalEnv}
    >
      <BlogSlugHeader isLoading={false} data={articleData} />
      <BlogSlugContent
        isLoading={false}
        content={articleData.content}
        currentUrl={currentUrl}
      />
      <BlogSlugKeepReading relatedArticles={articleData.related_articles} />
      <CtaSection />
    </main>
  );
}
