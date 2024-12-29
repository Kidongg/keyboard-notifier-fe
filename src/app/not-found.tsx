'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import ErrorActionButton from '@/app/components/ErrorActionButton/ErrorActionButton';

import styles from './not-found.module.scss';

const cx = classNames.bind(styles);

const Notfound = () => {
  const router = useRouter();

  return (
    <main className={cx('main')}>
      <div className={cx('logo')}>
        <img className={cx('image')} src={'/assets/images/error-page.png'} alt="image" width="180px" height="180px" />
      </div>
      <div className={cx('info')}>
        주소가 잘못되었거나 페이지가 삭제, 변경되었을 수 있어요.
        <br />
        주소를 다시 확인해주세요.
      </div>
      <div className={cx('buttons')}>
        <ErrorActionButton text="돌아가기" action={() => router.back()} />
        <ErrorActionButton text="홈으로 이동" action={() => router.push('/')} />
      </div>
    </main>
  );
};

export default Notfound;
