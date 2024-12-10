import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductsRes } from '@/app/types/api/product';

const getProductsQueryKey = () => ['products'];

export const getProductsQueryObject = () => {
  return {
    queryKey: getProductsQueryKey(),
    queryFn: async (): Promise<ProductsRes> => await ky.get(SOKEY_API_URL.PRODUCTS).json(),
  };
};
