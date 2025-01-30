import { create } from 'zustand';

type ModalType = 'group-buy-notification-subscribe-modal' | 'success-notification-alert-modal';

type ModalState = {
  isOpen: boolean;
  modalType: ModalType | null;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  openModal: (type) => set({ isOpen: true, modalType: type }),
  closeModal: () => set({ isOpen: false, modalType: null }),
}));
