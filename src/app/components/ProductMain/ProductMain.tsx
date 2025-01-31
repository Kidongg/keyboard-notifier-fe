'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import ScrollToTop from '@/app/(detail)/components/ScrollToTop';
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
import ProductsBanner from '@/app/components/ProductBanner';
import { useProductCategoryOption } from '@/app/store/useProductCategoryOption';
import { useProductStatusOption } from '@/app/store/useProductStatusOption';
import { ProductCategoryTypeEnum, ProductStatusEnum, SortByEnum } from '@/app/types/api/product';

import styles from './ProductMain.module.scss';

const cx = classNames.bind(styles);

const ProductMain = () => {
  const { productCategoryOption, setProductCategoryOption } = useProductCategoryOption();
  const { productStatusOption, setProductStatusOption } = useProductStatusOption();
  const [filterOption, setFilterOption] = useState<FilterOptionsType>(FILTER_OPTIONS[0]);

  const { data: defaultData } = useQuery(
    getProductsQueryObject({
      productStatus: productStatusOption?.type,
      productType: productCategoryOption?.type,
      sortBy: filterOption?.type,
    }),
  );

  const { data: notYetData } = useQuery(
    getProductsQueryObject({
      productStatus: ProductStatusEnum.IN_PROGRESS,
      productType: ProductCategoryTypeEnum.ALL,
      sortBy: SortByEnum.NEWEST,
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

  const productList = defaultData?.data.content;

  return (
    <>
      <ProductsBanner products={notYetData} />
      <div className={cx('container')}>
        <CategoryTabs
          selectedOption={productCategoryOption}
          options={PRODUCT_CATEGORY_OPTIONS}
          onClick={handleProductCategoryOptions}
        />
        <div className={cx('product-wrap')}>
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
        <ScrollToTop />
      </div>
    </>
  );
};

export default ProductMain;
