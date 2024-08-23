'use client';

import { config } from '@lib/react-query/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const QueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient(config);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
