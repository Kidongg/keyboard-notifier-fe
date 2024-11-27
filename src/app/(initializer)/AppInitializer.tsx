'use client';

import { useState } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { getQueryClient } from '@/app/(configs)/query/config';
import ModalProvider from '@/app/components/ModalProvider';

type AppInitializerProps = {
  children: React.ReactNode;
};

const AppInitializer = ({ children }: AppInitializerProps) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default AppInitializer;
