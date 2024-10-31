import classNames from 'classnames/bind';

import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

const Notification = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('box')}>
        <span className={cx('text')}>오픈 알림 신청</span>
        <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
      </div>
    </div>
  );
};

export default Notification;
