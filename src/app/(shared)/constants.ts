import { ProductCategoryTypeEnum, ProductStatusEnum, SortByEnum } from '@/app/types/api/product';

export const PRODUCT_STATUS_NAME = {
  [ProductStatusEnum.ALL]: '전체',
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

export const SORT_OPTION_NAME = {
  [SortByEnum.NEWEST]: '최신순',
  [SortByEnum.OLDEST]: '오래된 순',
  [SortByEnum.LOW_PRICE]: '낮은 가격순',
  [SortByEnum.HIGH_PRICE]: '높은 가격순',
};
