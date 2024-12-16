'use client';

import classNames from 'classnames/bind';

import { useModalStore } from '@/app/store/modalStore';

import styles from './NotificationSubscribeButton.module.scss';

const cx = classNames.bind(styles);

const NotificationSubscribeButton = () => {
  const { openModal } = useModalStore();

  // 오픈 알림 신청 모달 열기
  const onClickOpenNotificationSubscribeModal = () => {
    openModal('group-buy-notification-subscribe-modal');
  };

  return (
    <button className={cx('button')} onClick={onClickOpenNotificationSubscribeModal}>
      <span className={cx('text')}>오픈 알림 신청</span>
      <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
    </button>
  );
};

export default NotificationSubscribeButton;
