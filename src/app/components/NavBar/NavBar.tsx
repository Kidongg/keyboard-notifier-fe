import Link from 'next/link';

import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);

const NavBar = () => {
  return (
    <nav className={cx('navbar')}>
      <div className={cx('container')}>
        <Link href="/" className={cx('logo')}>
          <img src="/assets/images/sokey-logo.svg" alt="logo" width="98px" height="24px" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
