import classNames from 'classnames/bind';

// import GBItemList from '@/app/components/GBItemList';
import Notification from '@/app/components/Notification';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <main className={cx('main')}>
      {/* <GBItemList /> */}
      <Notification />
    </main>
  );
}
