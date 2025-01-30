import { create } from 'zustand';

interface ProductIdState {
  productId: string | null;
  setProductId: (id: string) => void;
}

const useProductId = create<ProductIdState>((set) => ({
  productId: null,
  setProductId: (id) => set({ productId: id }),
}));

export default useProductId;
