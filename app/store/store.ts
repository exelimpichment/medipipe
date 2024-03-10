import { createStore } from 'zustand/vanilla';

type State = {
  modalInternals: 'addTask' | null;
  isOpen: boolean;
};

type Action = {
  setModalInternals: (modalInternals: 'addTask' | null) => void;
  onOpen: () => void;
  onClose: () => void;
};

export type IModalStore = State & Action;

export const createModalStore = () => {
  return createStore<IModalStore>()((set) => ({
    modalInternals: null,
    isOpen: false,

    setModalInternals: (modalInternals) =>
      set(() => ({ modalInternals: modalInternals })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));
};
