'use client';
import classNames from 'classnames/bind';

import CategoryTabs from '@/app/components/CategoryTabs';
import GBItemList from '@/app/components/GBItemList';
import GBItemListHeader from '@/app/components/GBItemListHeader/GBItemListHeader';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('main')}>
      <CategoryTabs />
      <GBItemListHeader />
      <GBItemList />
    </main>
  );
}
