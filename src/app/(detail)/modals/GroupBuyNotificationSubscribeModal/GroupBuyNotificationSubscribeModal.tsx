import { useRef } from 'react';

import classNames from 'classnames/bind';

import CheckBox from '@/app/(detail)/components/CheckBox';
import useGroupByNotificationSubscribeModal from '@/app/(detail)/hooks/useGroupByNotificationSubscribeModal';
import { formatPhoneNumber } from '@/app/(shared)/utils/formatPhoneNumber';
import { useModalStore } from '@/app/store/modalStore';

import styles from './GroupBuyNotificationSubscribeModal.module.scss';

const cx = classNames.bind(styles);

const GroupBuyNotificationSubscribeModal = () => {
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const {
    phoneNumber,
    setPhoneNumber,
    checkedPhone,
    setCheckedPhone,
    onClickEnabledPhoneCheckbox,
    onClickDisabledPhoneCheckbox,
    checkedEmail,
    setCheckedEmail,
    onClickEnabledEmailCheckbox,
    onClickDisabledEmailCheckbox,
  } = useGroupByNotificationSubscribeModal(phoneInputRef, emailInputRef);

  const { openModal, closeModal } = useModalStore();

  // 오픈 알림 신청 모달 닫기
  const onClickCloseNotificationSubscribeModal = () => {
    closeModal();
  };

  // 연락처 입력시 데이터 변환시키기
  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  // 알림 신청 버튼 클릭
  const onClickNotificationRequest = () => {
    openModal('SuccessNotificationAlertModal');
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
            <CheckBox
              checked={checkedPhone}
              onClick={checkedPhone ? onClickEnabledPhoneCheckbox : onClickDisabledPhoneCheckbox}
              alt="checkbox-phone"
            />
            <label className={cx('label')}>연락처</label>
          </div>
          <input
            className={cx('input')}
            ref={phoneInputRef}
            onFocus={() => setCheckedPhone(true)}
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
            maxLength={13}
            placeholder="010-1234-5678"
            type="tel"
          />
        </div>
        <div className={cx('content-box')}>
          <div className={cx('label-box')}>
            <CheckBox
              checked={checkedEmail}
              onClick={checkedEmail ? onClickEnabledEmailCheckbox : onClickDisabledEmailCheckbox}
              alt="checkbox-email"
            />
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
        <button
          className={cx(checkedPhone || checkedEmail ? 'button-enabled' : 'button-disabled')}
          disabled={!checkedPhone && !checkedEmail}
          onClick={onClickNotificationRequest}
        >
          알림 신청 완료
        </button>
      </div>
    </dialog>
  );
};

export default GroupBuyNotificationSubscribeModal;
