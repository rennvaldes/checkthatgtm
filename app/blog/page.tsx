'use client';

import ArticlesSection from '@/components/blog-sections/v2/ArticlesSection';
import BlogHero from '@/components/blog-sections/v2/Hero';
import Spacer from '@/components/common/Spacer';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}: {error: Error}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-red-50 text-red-900">
      <h2 className="text-xl font-bold">Something went wrong:</h2>
      <pre className="mt-2 p-4 bg-red-100 rounded">{error.message}</pre>
      <pre className="mt-2 p-4 bg-red-100 rounded text-sm">{error.stack}</pre>
    </div>
  );
}

export default function Blog() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main>
        <BlogHero />
        <ArticlesSection />
        <CTABannerSection />
      </main>
    </ErrorBoundary>
  );
}
