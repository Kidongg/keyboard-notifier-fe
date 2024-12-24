import { ValueOf } from 'type-fest';

export const ProductStatusEnum = {
  NOT_YET: 'NOT_YET',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;

export type ProductStatusType = ValueOf<typeof ProductStatusEnum>;

export const ProductCategoryTypeEnum = {
  KIT: 'KIT',
  KEYBOARD: 'KEYBOARD',
  SWITCH: 'SWITCH',
  KEY_CAP: 'KEY_CAP',
  STABILIZER: 'STABILIZER',
  PARTS: 'PARTS',
} as const;

export type ProductCategoryType = ValueOf<typeof ProductCategoryTypeEnum>;

export type Product = {
  description: string;
  endDate: string;
  imageUrl: string[];
  name: string;
  price: number;
  productStatus: ProductStatusType;
  productType: ProductCategoryType;
  productUrl: string;
  startDate: string;
  unit: string;
  id: number;
};

export type ProductsRes = {
  data: {
    content: Product[];
    page: number;
    size: number;
    totalCount: number;
  };
};

export type ProductsDetailRes = {
  data: Product;
};
