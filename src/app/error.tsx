'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import ErrorActionButton from '@/app/components/ErrorActionButton/ErrorActionButton';

import styles from './error.module.scss';

const cx = classNames.bind(styles);

interface ErrorProps {
  reset: () => void;
}

const Error = ({ reset }: ErrorProps) => {
  const router = useRouter();

  return (
    <main className={cx('main')}>
      <div className={cx('logo')}>
        <img className={cx('image')} src={'/assets/images/error-page.png'} alt="image" width="180px" height="180px" />
      </div>
      <div className={cx('info')}>
        일시적으로 문제가 발생했습니다.
        <br />
        잠시 후 다시 시도해주세요.
      </div>
      <div className={cx('buttons')}>
        <ErrorActionButton text="새로고침" action={() => reset()} />
        <ErrorActionButton text="홈으로 이동" action={() => router.push('/')} />
      </div>
    </main>
  );
};

export default Error;
