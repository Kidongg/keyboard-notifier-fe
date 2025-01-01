import classNames from 'classnames/bind';

import styles from './GBItemCount.module.scss';

const cx = classNames.bind(styles);

type GBItemCountProps = {
  count?: number;
};

const GBItemCount = ({ count = 0 }: GBItemCountProps) => {
  return (
    <div className={cx('container')}>
      <span className={cx('count')}>{count}</span>
      <span className={cx('text')}>건</span>
    </div>
  );
};

export default GBItemCount;
