'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/utils/posthog-tracking';

interface PostHogPageViewProps {
  title?: string;
}

export default function PostHogPageView({ title }: PostHogPageViewProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when component mounts or pathname changes
    if (pathname) {
      trackPageView(pathname, title || document.title);
    }
  }, [pathname, title]);

  return null; // This component doesn't render anything
}
