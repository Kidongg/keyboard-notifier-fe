import classNames from 'classnames/bind';

import CategoryTabs from '@/app/components/CategoryTabs';
import GBItemList from '@/app/components/GBItemList';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('main')}>
      <CategoryTabs />
      <GBItemList />
    </main>
  );
}
