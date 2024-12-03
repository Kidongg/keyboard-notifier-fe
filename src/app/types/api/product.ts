import { ValueOf } from 'type-fest';

export const ProductStatusEnum = {
  NOT_YET: 'NOT_YET',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

export type ProductStatusType = ValueOf<typeof ProductStatusEnum>;

export const ProductTypeEnum = {
  KIT: 'KIT',
  KEYBOARD: 'KEYBOARD',
  SWITCH: 'SWITCH',
  KEY_CAP: 'KEY_CAP',
  STABILIZER: 'STABILIZER',
};

export type ProductType = ValueOf<typeof ProductTypeEnum>;

export type Product = {
  description: string;
  endDate: string;
  imageUrl: string[];
  name: string;
  price: number;
  productStatus: ProductStatusType;
  productType: ProductType;
  productUrl: string;
  startDate: string;
  unit: string;
};

export type ProductsRes = {
  data: {
    content: Product[];
    page: number;
    size: number;
    totalCount: number;
  };
};
