import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductReq, ProductsDetailRes, ProductsRes } from '@/app/types/api/product';

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

// 제품 상세 정보 쿼리 객체
export const getProductsDetailQueryObject = (productId: string) => {
  return {
    queryKey: ['productDetail', productId],
    queryFn: async (): Promise<ProductsDetailRes> => await ky.get(`${SOKEY_API_URL.PRODUCTS}/${productId}`).json(),
  };
};
