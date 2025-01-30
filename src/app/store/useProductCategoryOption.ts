import { create } from 'zustand';

import { PRODUCT_CATEGORY_OPTIONS, ProductCategoryOptionsType } from '../(shared)/constants';

interface ProductCategoryOptionStore {
  productCategoryOption: ProductCategoryOptionsType;
  setProductCategoryOption: (option: ProductCategoryOptionsType) => void;
}

export const useProductCategoryOption = create<ProductCategoryOptionStore>((set) => ({
  productCategoryOption: PRODUCT_CATEGORY_OPTIONS[0],
  setProductCategoryOption: (option) => set({ productCategoryOption: option }),
}));
