import classNames from 'classnames/bind';

import GBItem from '@/app/(detail)/components/GBitem/GBitem';

import styles from './GBItemList.module.scss';

const cx = classNames.bind(styles);

const GBItemList = () => {
  return (
    <ul className={cx('list-container')}>
      {Array.from({ length: 6 }).map((_, index) => (
        <GBItem key={index} />
      ))}
    </ul>
  );
};

export default GBItemList;
