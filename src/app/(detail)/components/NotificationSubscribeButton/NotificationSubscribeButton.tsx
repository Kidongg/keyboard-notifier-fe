import classNames from 'classnames/bind';

import styles from './NotificationSubscribeButton.module.scss';

const cx = classNames.bind(styles);

const NotificationSubscribeButton = () => {
  return (
    <button className={cx('button')}>
      <span className={cx('text')}>오픈 알림 신청</span>
      <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
    </button>
  );
};

export default NotificationSubscribeButton;
