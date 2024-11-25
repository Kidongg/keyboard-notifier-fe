import classNames from 'classnames/bind';

import Divider from '@/app/(detail)/components/Divider';
import GBItemDetail from '@/app/(detail)/components/GBItemDetail';
import GBItemGallery from '@/app/(detail)/components/GBItemGallery';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Detail() {
  return (
    <main className={cx('main')}>
      <GBItemDetail />
      <Divider />
      <GBItemGallery />
    </main>
  );
}
