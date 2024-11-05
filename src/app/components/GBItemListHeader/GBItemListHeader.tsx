'use client';

import classNames from 'classnames/bind';

import FilterAndSortingButtons from '@/app/components/FilterAndSortingButtons/FilterAndSortingButtons';
import GBItemCount from '@/app/components/GBItemCount/GBItemCount';

import styles from './GBItemListHeader.module.scss';

const cx = classNames.bind(styles);

const GBItemListHeader = () => {
  return (
    <div className={cx('container')}>
      <GBItemCount />
      <FilterAndSortingButtons />
    </div>
  );
};

export default GBItemListHeader;
