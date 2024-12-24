import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductsDetailRes, ProductsRes } from '@/app/types/api/product';

const getProductsQueryKey = () => ['products'];

export const getProductsQueryObject = () => {
  return {
    queryKey: getProductsQueryKey(),
    queryFn: async (): Promise<ProductsRes> => await ky.get(SOKEY_API_URL.PRODUCTS).json(),
  };
};

// 제품 상세 정보 쿼리 객체
export const getProductsDetailQueryObject = (productId: string) => {
  return {
    queryKey: ['productDetail', productId],
    queryFn: async (): Promise<ProductsDetailRes> => await ky.get(`${SOKEY_API_URL.PRODUCTS}/${productId}`).json(),
  };
};
