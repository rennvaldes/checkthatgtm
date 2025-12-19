import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import CaseStudyPageClient from "@/components/case-studies-sections/v2/CaseStudyPage/CaseStudyPageClient";
import Spacer from "@/components/common/Spacer";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-red-50 text-red-900">
      <h2 className="text-xl font-bold">Something went wrong:</h2>
      <pre className="mt-2 p-4 bg-red-100 rounded">{error.message}</pre>
      <pre className="mt-2 p-4 bg-red-100 rounded text-sm">{error.stack}</pre>
    </div>
  );
}

export default async function CaseStudyArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const isLocalEnv = process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true";
  const isPullRequest = process.env.IS_PULL_REQUEST === "true";
  const showDrafts = isLocalEnv || isPullRequest;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Spacer size="d122" />
      <CaseStudyPageClient
        slug={resolvedParams.slug}
        showDrafts={showDrafts}
        isLocalEnv={isLocalEnv}
        isPullRequest={isPullRequest}
      />
    </ErrorBoundary>
  );
}
