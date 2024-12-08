import { Suspense } from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/app/(configs)/query/config';
import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import ProductList from '@/app/components/GBItemList';

const ProductListContainer = async () => {
  const queryClient = getQueryClient();

  try {
    await queryClient.prefetchQuery(getProductsQueryObject());
  } catch (error) {
    console.error(error);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={null}>
        <ProductList />
      </Suspense>
    </HydrationBoundary>
  );
};

export default ProductListContainer;
