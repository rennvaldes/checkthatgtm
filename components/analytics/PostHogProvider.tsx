'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      posthog.init('phc_EYsgKoq2jVfc6ZU11DzXDh9NZKowk1BsLefnUxZUpqI', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always',
        capture_pageview: false, // We handle this manually in PostHogPageView
        loaded: () => setIsInitialized(true),
      });
    }
  }, [isInitialized]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
