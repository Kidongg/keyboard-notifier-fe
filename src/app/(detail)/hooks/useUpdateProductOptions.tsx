import { useEffect } from 'react';

import { useProductCategoryOption } from '@/app/store/useProductCategoryOption';
import { useProductStatusOption } from '@/app/store/useProductStatusOption';
import {
  ProductCategoryEnumType,
  ProductCategoryTypeEnum,
  ProductStatusEnum,
  ProductStatusEnumType,
} from '@/app/types/api/product';

const mappingStatusLabel = (type: ProductStatusEnumType) => {
  const statusLabels: Record<ProductStatusEnumType, string> = {
    ALL: '전체',
    NOT_YET: '진행예정',
    IN_PROGRESS: '진행중',
    DONE: '공제완료',
  };

  return statusLabels[type];
};

const useUpdateProductOptions = (status: ProductStatusEnumType, categoryType: ProductCategoryEnumType) => {
  const { productCategoryOption, setProductCategoryOption } = useProductCategoryOption();
  const { productStatusOption, setProductStatusOption } = useProductStatusOption();

  useEffect(() => {
    setProductCategoryOption({
      ...productCategoryOption,
      type: categoryType,
    });

    setProductStatusOption({
      ...productStatusOption,
      type: status,
      label: mappingStatusLabel(status),
    });

    return () => {
      setProductCategoryOption({
        ...productStatusOption,
        type: ProductCategoryTypeEnum.ALL,
      });

      setProductStatusOption({
        ...productStatusOption,
        type: ProductStatusEnum.ALL,
      });
    };
  }, [status, categoryType]);
};

export default useUpdateProductOptions;
