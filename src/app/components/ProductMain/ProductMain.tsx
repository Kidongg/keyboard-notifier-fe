'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import {
  FILTER_OPTIONS,
  FilterOptionsType,
  PRODUCT_CATEGORY_OPTIONS,
  PRODUCT_STATUS_OPTIONS,
  ProductCategoryOptionsType,
  ProductStatusOptionsType,
} from '@/app/(shared)/constants';
import CategoryTabs from '@/app/components/CategoryTabs';
import DropdownSelect from '@/app/components/DropdownSelect';
import GBItemCount from '@/app/components/GBItemCount/GBItemCount';
import GBItemList from '@/app/components/GBItemList';

import styles from './ProductMain.module.scss';

const cx = classNames.bind(styles);

const ProductMain = () => {
  const [productCategoryOption, setProductCategoryOption] = useState<ProductCategoryOptionsType>(
    PRODUCT_CATEGORY_OPTIONS[0],
  );
  const [productStatusOption, setProductStatusOption] = useState<ProductStatusOptionsType>(PRODUCT_STATUS_OPTIONS[0]);
  const [filterOption, setFilterOption] = useState<FilterOptionsType>(FILTER_OPTIONS[0]);

  const { data } = useQuery(
    getProductsQueryObject({
      productStatus: productStatusOption?.type,
      productType: productCategoryOption?.type,
      sortBy: filterOption?.type,
    }),
  );

  const handleProductCategoryOptions = (option: ProductCategoryOptionsType) => {
    setProductCategoryOption(option);
  };

  const handleProductStatusOptions = (option: ProductStatusOptionsType) => {
    setProductStatusOption(option);
  };

  const handleFilterOptions = (option: FilterOptionsType) => {
    setFilterOption(option);
  };

  const productList = data?.data.content;

  return (
    <div className={cx('container')}>
      <CategoryTabs
        selectedOption={productCategoryOption}
        options={PRODUCT_CATEGORY_OPTIONS}
        onClick={handleProductCategoryOptions}
      />
      <div className={cx('product-header')}>
        <GBItemCount count={productList?.length} />
        <DropdownSelect
          selectedOption={productStatusOption}
          options={PRODUCT_STATUS_OPTIONS}
          onClick={handleProductStatusOptions}
        />
        <DropdownSelect selectedOption={filterOption} options={FILTER_OPTIONS} onClick={handleFilterOptions} />
      </div>
      <GBItemList productList={productList} />
    </div>
  );
};

export default ProductMain;
