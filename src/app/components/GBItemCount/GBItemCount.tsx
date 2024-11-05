import classNames from 'classnames/bind';

import styles from './GBItemCount.module.scss';

const cx = classNames.bind(styles);

const GBItemCount = () => {
  return (
    <div className={cx('container')}>
      <span className={cx('count')}>00</span>
      <span className={cx('text')}>건</span>
    </div>
  );
};

export default GBItemCount;
