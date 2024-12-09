import classNames from 'classnames/bind';

import styles from './GroupBuyNotificationSubscribeModal.module.scss';

const cx = classNames.bind(styles);

const GroupBuyNotificationSubscribeModal = () => {
  return (
    <dialog className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
      <div className={cx('modal-header')}>
        <div className={cx('title-box')}>
          <div className={cx('title')}>공제알림 신청</div>
          <div className={cx('close')}>
            <img src="/assets/icons/close.png" alt="close" width="24px" height="24px" />
          </div>
        </div>
        <div className={cx('description')}>알림을 받으실 수단을 선택하고, 작성해주세요</div>
      </div>
      <div className={cx('modal-content')}>
        <div className={cx('content-box')}>
          <div className={cx('label-box')}>
            <img
              className={cx('check-disabled')}
              src="/assets/icons/checkbox-disabled.png"
              alt="checkbox-disabled"
              width="24px"
              height="24px"
            />
            <label className={cx('label')}>연락처</label>
          </div>
          <input className={cx('input')} type="tel" />
        </div>
        <div className={cx('content-box')}>
          <div className={cx('label-box')}>
            <img
              className={cx('check-disabled')}
              src="/assets/icons/checkbox-disabled.png"
              alt="checkbox-disabled"
              width="24px"
              height="24px"
            />
            <label className={cx('label')}>이메일</label>
          </div>
          <input className={cx('input')} type="email" />
        </div>
      </div>
      <div className={cx('modal-footer')}>
        <button className={cx('button-disabled')}>알림 신청 완료</button>
      </div>
    </dialog>
  );
};

export default GroupBuyNotificationSubscribeModal;
