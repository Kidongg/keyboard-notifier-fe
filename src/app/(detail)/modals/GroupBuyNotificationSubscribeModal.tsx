import { useRef, useState } from 'react';

import classNames from 'classnames/bind';

import { useModalStore } from '@/app/store/modalStore';

import styles from './GroupBuyNotificationSubscribeModal.module.scss';

const cx = classNames.bind(styles);

const GroupBuyNotificationSubscribeModal = () => {
  const [checkedPhone, setCheckedPhone] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);

  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const { closeModal } = useModalStore();

  // 오픈 알림 신청 모달 닫기
  const onClickCloseNotificationSubscribeModal = () => {
    closeModal();
  };

  // 연락처 체크박스 클릭
  const onClickDisabledPhoneCheckbox = () => {
    setCheckedPhone(true);
    phoneInputRef.current?.focus();
  };

  // 이메일 체크박스 클릭
  const onClickDisabledEmailCheckbox = () => {
    setCheckedEmail(true);
    emailInputRef.current?.focus();
  };

  return (
    <dialog className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
      <div className={cx('modal-header')}>
        <div className={cx('title-box')}>
          <div className={cx('title')}>공제알림 신청</div>
          <div className={cx('close')} onClick={onClickCloseNotificationSubscribeModal}>
            <img src="/assets/icons/close.png" alt="close" width="24px" height="24px" />
          </div>
        </div>
        <div className={cx('description')}>알림을 받으실 수단을 선택하고, 작성해주세요</div>
      </div>
      <div className={cx('modal-content')}>
        <div className={cx('content-box')}>
          <div className={cx('label-box')}>
            {checkedPhone ? (
              <img
                className={cx('check')}
                onClick={() => setCheckedPhone(false)}
                src="/assets/icons/checkbox-enabled.png"
                alt="checkbox-enabled"
                width="24px"
                height="24px"
              />
            ) : (
              <img
                className={cx('check')}
                onClick={onClickDisabledPhoneCheckbox}
                src="/assets/icons/checkbox-disabled.png"
                alt="checkbox-disabled"
                width="24px"
                height="24px"
              />
            )}
            <label className={cx('label')}>연락처</label>
          </div>
          <input
            className={cx('input')}
            ref={phoneInputRef}
            onFocus={() => setCheckedPhone(true)}
            placeholder="010-1234-5678"
            type="tel"
          />
        </div>
        <div className={cx('content-box')}>
          <div className={cx('label-box')}>
            {checkedEmail ? (
              <img
                className={cx('check')}
                onClick={() => setCheckedEmail(false)}
                src="/assets/icons/checkbox-enabled.png"
                alt="checkbox-enabled"
                width="24px"
                height="24px"
              />
            ) : (
              <img
                className={cx('check')}
                onClick={onClickDisabledEmailCheckbox}
                src="/assets/icons/checkbox-disabled.png"
                alt="checkbox-disabled"
                width="24px"
                height="24px"
              />
            )}
            <label className={cx('label')}>이메일</label>
          </div>
          <input
            className={cx('input')}
            ref={emailInputRef}
            onFocus={() => setCheckedEmail(true)}
            placeholder="sokey@gmail.com"
            type="email"
          />
        </div>
      </div>
      <div className={cx('modal-footer')}>
        <button className={cx(checkedPhone || checkedEmail ? 'button-enabled' : 'button-disabled')}>
          알림 신청 완료
        </button>
      </div>
    </dialog>
  );
};

export default GroupBuyNotificationSubscribeModal;
