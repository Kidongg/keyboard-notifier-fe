import { useQueryClient } from '@tanstack/react-query';

import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import DropdownSelect from '@/app/components/DropdownSelect';
import { DropdownOption } from '@/app/components/DropdownSelect/DropdownSelect';
import { ProductStatusEnum, ProductStatusEnumType } from '@/app/types/api/product';

const PRODUCT_STATUS_OPTIONS = [
  {
    type: ProductStatusEnum.ALL,
    value: '전체',
  },
  {
    type: ProductStatusEnum.NOT_YET,
    value: '진행예정',
  },
  {
    type: ProductStatusEnum.IN_PROGRESS,
    value: '진행중',
  },
  {
    type: ProductStatusEnum.DONE,
    value: '공제완료',
  },
];

const ProductStatusDropdownSelect = () => {
  const queryClient = useQueryClient();

  const fetchProductList = (option: DropdownOption) => {
    queryClient.fetchQuery(
      getProductsQueryObject({ productStatus: option.type.toLocaleLowerCase() as ProductStatusEnumType }),
    );
  };

  return <DropdownSelect options={PRODUCT_STATUS_OPTIONS} onClick={fetchProductList} />;
};

export default ProductStatusDropdownSelect;
