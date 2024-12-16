import { create } from 'zustand';

type ModalType = 'group-buy-notification-subscribe-modal' | 'success-notification-alert-modal';

type ModalProps = Record<string, any>;

type ModalState = {
  isOpen: boolean;
  modalType: ModalType | null;
  modalProps: ModalProps;
  openModal: (type: ModalType, props?: ModalProps) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  openModal: (type, props = {}) => set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () => set({ isOpen: false, modalType: null, modalProps: {} }),
}));
