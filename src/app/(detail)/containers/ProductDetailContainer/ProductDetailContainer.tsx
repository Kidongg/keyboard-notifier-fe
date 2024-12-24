import { Suspense } from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/app/(configs)/query/config';
import GBItemDetail from '@/app/(detail)/components/GBItemDetail';
import { getProductsDetailQueryObject } from '@/app/(queries)/productsQueries';

type ProductDetailContainerProps = {
  productId: string;
};

const ProductDetailContainer = async ({ productId }: ProductDetailContainerProps) => {
  const queryClient = getQueryClient();

  try {
    await queryClient.prefetchQuery(getProductsDetailQueryObject(productId));
  } catch (error) {
    console.error(error);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={null}>
        <GBItemDetail />
      </Suspense>
    </HydrationBoundary>
  );
};

export default ProductDetailContainer;
