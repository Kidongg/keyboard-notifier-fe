import { ProductCategoryTypeEnum, ProductStatusEnum } from '@/app/types/api/product';

export const PRODUCT_STATUS_NAME = {
  [ProductStatusEnum.NOT_YET]: '진행예정',
  [ProductStatusEnum.IN_PROGRESS]: '진행중',
  [ProductStatusEnum.DONE]: '공제완료',
};

export const PRODUCT_CATEGORY_NAME = {
  [ProductCategoryTypeEnum.KEYBOARD]: '키보드',
  [ProductCategoryTypeEnum.KEY_CAP]: '키캡',
  [ProductCategoryTypeEnum.KIT]: '키트',
  [ProductCategoryTypeEnum.STABILIZER]: '스테빌라이저',
  [ProductCategoryTypeEnum.SWITCH]: '스위치',
  [ProductCategoryTypeEnum.PARTS]: '파츠',
};
