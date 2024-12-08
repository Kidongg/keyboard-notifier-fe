'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import GBItem from '@/app/components/GBItem';

import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

const ProductList = () => {
  const { data } = useSuspenseQuery(getProductsQueryObject());

  if (!data) {
    return null;
  }

  return (
    <ul className={cx('list-container')}>
      {data.data.content.map((product, index) => (
        <GBItem
          key={index}
          name={product.name}
          price={product.price}
          unit={product.unit}
          startDate={product.startDate}
          endDate={product.endDate}
          imageUrl={product.imageUrl}
          productUrl={product.productUrl}
          status={product.productStatus}
          categoryType={product.productType}
        />
      ))}
    </ul>
  );
};

export default ProductList;
