'use client';

// import { usePathname } from 'next/navigation';

// import { useSuspenseQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import GBItemList from '@/app/(detail)/components/GBItemList';
import GBItemListHeader from '@/app/(detail)/components/GBItemListHeader';

// import { getProductSimilarListQueryObject } from '@/app/(queries)/productsQueries';
import styles from './GBItemGallery.module.scss';

const cx = classNames.bind(styles);

const GBItemGallery = () => {
  // const pathname = usePathname();

  // const { data } = useSuspenseQuery(getProductSimilarListQueryObject(pathname.replace('/', '')));

  // if (!data) {
  //   return null;
  // }

  // console.log('data: ', data);

  return (
    <section className={cx('container')}>
      <GBItemListHeader />
      <GBItemList />
    </section>
  );
};

export default GBItemGallery;
