'use client';

import CaseStudiesHero from '@/components/case-studies-sections/v2/Hero';
import CaseStudiesListingSection from '@/components/case-studies-sections/v2/ListingSection';
import Spacer from '@/components/common/Spacer';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-red-50 text-red-900">
      <h2 className="text-xl font-bold">Something went wrong:</h2>
      <pre className="mt-2 p-4 bg-red-100 rounded">{error.message}</pre>
      <pre className="mt-2 p-4 bg-red-100 rounded text-sm">{error.stack}</pre>
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="relative flex flex-col items-center">
        <Spacer size="d122" />
        <CaseStudiesHero />
        <CaseStudiesListingSection />
      </main>
    </ErrorBoundary>
  );
}
