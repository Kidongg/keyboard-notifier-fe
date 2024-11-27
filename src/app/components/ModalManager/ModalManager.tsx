import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames/bind';

import GroupBuyNotificationSubscribeModal from '@/app/(detail)/modals/GroupBuyNotificationSubscribeModal';
import { useModalStore } from '@/app/store/modalStore';

import styles from './ModalManager.module.scss';

const cx = classNames.bind(styles);

const ModalManager = () => {
  const { isOpen, modalType, modalProps, closeModal } = useModalStore();

  const renderModal = () => {
    switch (modalType) {
      case 'GroupBuyNotificationSubscribeModal':
        return <GroupBuyNotificationSubscribeModal {...modalProps} />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={cx('modal-backdrop')} onClick={closeModal} aria-hidden="true">
            {renderModal()}
          </div>,
          document.body,
        )}
    </React.Fragment>
  );
};

export default ModalManager;
