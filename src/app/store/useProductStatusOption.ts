import { create } from 'zustand';

import { PRODUCT_STATUS_OPTIONS, ProductStatusOptionsType } from '../(shared)/constants';

interface ProductStatusOptionStore {
  productStatusOption: ProductStatusOptionsType;
  setProductStatusOption: (option: ProductStatusOptionsType) => void;
}

export const useProductStatusOption = create<ProductStatusOptionStore>((set) => ({
  productStatusOption: PRODUCT_STATUS_OPTIONS[0],
  setProductStatusOption: (option) => set({ productStatusOption: option }),
}));
