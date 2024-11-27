import { create } from 'zustand';

type ModalProps = Record<string, any>;

type ModalState = {
  isOpen: boolean;
  modalType: string | null;
  modalProps: ModalProps;
  openModal: (type: string, props?: ModalProps) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  openModal: (type, props = {}) => set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () => set({ isOpen: false, modalType: null, modalProps: {} }),
}));
