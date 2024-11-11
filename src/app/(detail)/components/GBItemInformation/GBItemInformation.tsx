import classNames from 'classnames/bind';

import styles from './GBItemInformation.module.scss';

const cx = classNames.bind(styles);

const GBItemInformation = () => {
  return <div className={cx('container')}>정보</div>;
};

export default GBItemInformation;
