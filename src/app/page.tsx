import classNames from 'classnames/bind';

// import GBItemList from '@/app/components/GBItemList';
import NotificationDefault from '@/app/components/NotificationDefault';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('main')}>
      {/* <GBItemList /> */}
      <NotificationDefault />
    </main>
  );
}
