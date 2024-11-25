import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <span className={cx('service-name')}>@ D2D</span>
        <span className={cx('channel')}>Contact US</span>
      </div>
    </footer>
  );
};

export default Footer;
