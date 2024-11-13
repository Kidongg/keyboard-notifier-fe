import classNames from 'classnames/bind';

import Badge from '@/app/(detail)/components/Badge/Badge';
import NavigateToProductPageButton from '@/app/(detail)/components/NavigateToProductPageButton';
import NotificationSubscribeButton from '@/app/(detail)/components/NotificationSubscribeButton';

import styles from './GBItemInformation.module.scss';

const cx = classNames.bind(styles);

const GBItemInformation = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('badges')}>
        <Badge text="진행예정" type="status" />
        <Badge text="키보드" type="category" />
      </div>
      <div className={cx('texts')}>
        <p className={cx('title')}>[GB] GMK Rubrehose Artisanchoke</p>
        <p className={cx('price')}>
          <span className={cx('value')}>68,000</span>
          <span className={cx('currency')}>원</span>
        </p>
        <p className={cx('period')}>2024.01 - 2024.07</p>
      </div>
      <div className={cx('buttons')}>
        <NotificationSubscribeButton />
        <NavigateToProductPageButton />
      </div>
    </section>
  );
};

export default GBItemInformation;
