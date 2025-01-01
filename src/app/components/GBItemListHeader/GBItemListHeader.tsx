'use client';

import classNames from 'classnames/bind';

import styles from './GBItemListHeader.module.scss';

const cx = classNames.bind(styles);

const GBItemListHeader = () => {
  return (
    <div className={cx('container')}>
      {/* <DropdownSelect options={PRODUCT_STATUS_OPTIONS} />
      <DropdownSelect options={SORT_BY_OPTIONS} defaultOption={SORT_BY_OPTIONS[0]} /> */}
    </div>
  );
};

export default GBItemListHeader;
