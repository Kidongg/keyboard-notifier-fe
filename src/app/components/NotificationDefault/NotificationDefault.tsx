import classNames from 'classnames/bind';

import styles from './NotificationDefault.module.scss';

const cx = classNames.bind(styles);

const NotificationDefault = () => {
  return (
    <div className={cx('box')}>
      <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
    </div>
  );
};

export default NotificationDefault;
