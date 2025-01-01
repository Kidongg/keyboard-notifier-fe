'use client';
import classNames from 'classnames/bind';

import GBItem from '@/app/components/GBItem';
import { Product } from '@/app/types/api/product';

import styles from './GBItemList.module.scss';

const cx = classNames.bind(styles);

type GBItemListProps = {
  productList?: Product[];
};

const GBItemList = ({ productList }: GBItemListProps) => {
  if (!productList) {
    return null;
  }

  return (
    <ul className={cx('list-container')}>
      {productList.map((product, index) => (
        <GBItem
          key={index}
          name={product.name}
          price={product.price}
          unit={product.unit}
          startDate={product.startDate}
          endDate={product.endDate}
          imageUrl={product.imageUrl}
          status={product.productStatus}
          categoryType={product.productType}
          id={product.id}
        />
      ))}
    </ul>
  );
};

export default GBItemList;
