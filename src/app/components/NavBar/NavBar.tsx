'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import { PRODUCT_CATEGORY_OPTIONS, PRODUCT_STATUS_OPTIONS } from '@/app/(shared)/constants';
import { useProductCategoryOption } from '@/app/store/useProductCategoryOption';
import { useProductStatusOption } from '@/app/store/useProductStatusOption';

import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);

const NavBar = () => {
  const router = useRouter();

  const { setProductCategoryOption } = useProductCategoryOption();
  const { setProductStatusOption } = useProductStatusOption();

  const moveToMainPage = () => {
    setProductCategoryOption(PRODUCT_CATEGORY_OPTIONS[0]);
    setProductStatusOption(PRODUCT_STATUS_OPTIONS[0]);

    router.push('/');
  };

  return (
    <nav className={cx('navbar')}>
      <div className={cx('container')}>
        <img src="/assets/images/sokey-logo.svg" alt="logo" width="98px" height="24px" onClick={moveToMainPage} />
      </div>
    </nav>
  );
};

export default NavBar;
