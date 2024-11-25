import classNames from 'classnames/bind';

import GBItemList from '@/app/(detail)/components/GBItemList';
import GBItemListHeader from '@/app/(detail)/components/GBItemListHeader';

import styles from './GBItemGallery.module.scss';

const cx = classNames.bind(styles);

const GBItemGallery = () => {
  return (
    <section className={cx('container')}>
      <GBItemListHeader />
      <GBItemList />
    </section>
  );
};

export default GBItemGallery;
