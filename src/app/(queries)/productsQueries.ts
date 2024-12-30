import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductReq, ProductsDetailRes, ProductsRes, ProductDetailRes, ProductSimilarListRes } from '@/app/types/api/product';

const getProductsQueryKey = (params?: ProductReq) => [
  'products',
  params?.sortBy,
  params?.productStatus,
  params?.productType,
];

export const getProductsQueryObject = (params?: ProductReq) => {
  return {
    queryKey: getProductsQueryKey(params),
    queryFn: async (): Promise<ProductsRes> =>
      await ky
        .get(SOKEY_API_URL.PRODUCTS, {
          searchParams: params,
        })
        .json(),
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
