import classNames from 'classnames/bind';

import Badge from '@/app/(detail)/components/Badge/Badge';

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
        <button>오픈 알림 신청</button>
        <button>해당상품 보러가기</button>
      </div>
    </section>
  );
};

export default GBItemInformation;
