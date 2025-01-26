'use client';

import { usePathname } from 'next/navigation';

import { useSuspenseQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import GBItemCarousel from '@/app/(detail)/components/GBItemCarousel';
import GBItemInformation from '@/app/(detail)/components/GBItemInformation';
import { getProductsDetailQueryObject } from '@/app/(queries)/productsQueries';

import { useUpdateProductOptions } from '../../hooks/useUpdateProductOptions';

import styles from './GBItemDetail.module.scss';

const cx = classNames.bind(styles);

const GBItemDetail = () => {
  const pathname = usePathname();

  const { data } = useSuspenseQuery(getProductsDetailQueryObject(pathname.replace('/', '')));

  useUpdateProductOptions(data.data.productStatus, data.data.productType);

  if (!data) {
    return null;
  }

  return (
    <div className={cx('container')}>
      <GBItemCarousel imageUrlList={data.data.imageUrl} />
      <GBItemInformation
        status={data.data.productStatus}
        categoryType={data.data.productType}
        name={data.data.name}
        price={data.data.price}
        unit={data.data.unit}
        startDate={data.data.startDate}
        endDate={data.data.endDate}
        productUrl={data.data.productUrl}
      />
    </div>
  );
};

export default GBItemDetail;
