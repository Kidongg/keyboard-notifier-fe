import classNames from 'classnames/bind';

import Badge from '@/app/(detail)/components/Badge/Badge';

import styles from './GBitem.module.scss';

const cx = classNames.bind(styles);

const GBItem = () => {
  return (
    <li className={cx('list')} role="button">
      <div className={cx('badge-wrap')}>
        <Badge text="진행예정" type="status" />
        <Badge text="키보드" type="category" />
      </div>
      <div className={cx('content-wrap')}>
        <div className={cx('title')}>[GB] GMK Rubrehose Artisanchoke Idkw...</div>
        <div className={cx('price')}>
          <span className={cx('value')}>68,000</span>
          <span className={cx('currency')}>원</span>
        </div>
        <div className={cx('date')}>2021.01 - 2024.07</div>
      </div>
    </li>
  );
};

export default GBItem;
