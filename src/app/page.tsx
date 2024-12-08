import classNames from 'classnames/bind';

import CategoryTabs from '@/app/components/CategoryTabs';
import GBItemListHeader from '@/app/components/GBItemListHeader/GBItemListHeader';
import ProductListContainer from '@/app/containers/ProductListContainer';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('main')}>
      <CategoryTabs />
      <GBItemListHeader />
      <ProductListContainer />
    </main>
  );
}
