import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <span className={cx('service-name')}>@ D2D</span>
        <a className={cx('channel')} target="_blank" href="https://forms.gle/k9HNS1kkV3RfRCKX6">
          Contact US
        </a>
      </div>
    </footer>
  );
};

export default Footer;
