import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductDetailRes, ProductSimilarListRes, ProductsRes } from '@/app/types/api/product';

const getProductsQueryKey = () => ['products'];

export const getProductsQueryObject = () => {
  return {
    queryKey: getProductsQueryKey(),
    queryFn: async (): Promise<ProductsRes> => await ky.get(SOKEY_API_URL.PRODUCTS).json(),
  };
};

// 제품 상세 조회 쿼리 객체
export const getProductsDetailQueryObject = (productId: string) => {
  return {
    queryKey: ['product-detail', productId],
    queryFn: async (): Promise<ProductDetailRes> => await ky.get(`${SOKEY_API_URL.PRODUCTS}/${productId}`).json(),
  };
};

// 유사 제품 리스트 조회 쿼리 객체
export const getProductSimilarListQueryObject = (productId: string) => {
  return {
    queryKey: ['product-similar'],
    queryFn: async (): Promise<ProductSimilarListRes> =>
      await ky.get(`${SOKEY_API_URL.PRODUCTS}/${productId}/similar`).json(),
  };
};
