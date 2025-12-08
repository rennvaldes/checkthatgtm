'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import PostHogProvider from './analytics/PostHogProvider';

const queryClient = new QueryClient();

function Providers({ children }: PropsWithChildren) {
  return (
    <PostHogProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PostHogProvider>
  );
}

export default Providers;
