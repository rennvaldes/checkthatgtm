'use client';

import ArticlesSection from '@/components/blog-sections/ArticlesSection';
import BlogHero from '@/components/blog-sections/Hero';
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
  console.debug({
    isLocalEnv: process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV,
    isPullRequest: process.env.NEXT_PUBLIC_IS_PULL_REQUEST,
  });
  return (
    <>
    <h1>Blog</h1>
    <p>
      {process.env.NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV}
    </p>
    <p></p>
    <ErrorBoundary FallbackComponent={ErrorFallback}>

      <main className='relative flex min-h-screen flex-col items-center justify-between pt-16 pb-8'>
        <BlogHero />
        <ArticlesSection />
      </main>

    </ErrorBoundary>
    </>
  );
}
