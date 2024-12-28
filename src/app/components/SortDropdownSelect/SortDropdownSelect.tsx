import { useQueryClient } from '@tanstack/react-query';

import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import DropdownSelect from '@/app/components/DropdownSelect';
import { DropdownOption } from '@/app/components/DropdownSelect/DropdownSelect';
import { SortByEnum, SortByEnumType } from '@/app/types/api/product';

const SORT_OPTIONS = [
  {
    type: SortByEnum.NEWEST,
    value: '최신순',
  },
  {
    type: SortByEnum.HIGH_PRICE,
    value: '높은 가격순',
  },
  {
    type: SortByEnum.LOW_PRICE,
    value: '낮은 가격순',
  },
  {
    type: SortByEnum.OLDEST,
    value: '오래된 순',
  },
];

const SortDropdownSelect = () => {
  const queryClient = useQueryClient();

  const fetchProductList = (option: DropdownOption) => {
    queryClient.fetchQuery(getProductsQueryObject({ sortBy: option.type.toLocaleUpperCase() as SortByEnumType }));
  };

  return <DropdownSelect options={SORT_OPTIONS} defaultOption={SORT_OPTIONS[0]} onClick={fetchProductList} />;
};

export default SortDropdownSelect;
