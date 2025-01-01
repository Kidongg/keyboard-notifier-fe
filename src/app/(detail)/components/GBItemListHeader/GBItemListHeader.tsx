'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import styles from './GBItemListHeader.module.scss';

const cx = classNames.bind(styles);

const GBItemListHeader = () => {
  const router = useRouter();

  const onClickMoreButton = () => {
    // 이전 페이지로 이동
    router.push('/');
  };

  return (
    <section className={cx('container')}>
      <div className={cx('title')}>관련상품</div>
      <button className={cx('more-button')} onClick={onClickMoreButton}>
        <span>더보기</span>
        <span>{`>`}</span>
      </button>
    </section>
  );
};

export default GBItemListHeader;
