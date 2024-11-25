import classNames from 'classnames/bind';

import GBItemCarousel from '@/app/(detail)/components/GBItemCarousel';
import GBItemInformation from '@/app/(detail)/components/GBItemInformation';

import styles from './GBItemDetail.module.scss';

const cx = classNames.bind(styles);

const GBItemDetail = () => {
  return (
    <div className={cx('container')}>
      <GBItemCarousel />
      <GBItemInformation />
    </div>
  );
};

export default GBItemDetail;
