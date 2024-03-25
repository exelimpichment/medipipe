import { createStore } from 'zustand/vanilla';

type State = {
  modalInternals: 'addTask' | null;
  isOpen: boolean;
  dashboardCursor: number | null;
};

type Action = {
  setModalInternals: (modalInternals: 'addTask' | null) => void;
  onOpen: () => void;
  onClose: () => void;
  setDashboardCursor: (dashboardCursor: number | null) => void;
};

export type IStore = State & Action;

export const createModalStore = () => {
  return createStore<IStore>()((set) => ({
    isOpen: false,
    modalInternals: null,
    dashboardCursor: null,

    setModalInternals: (modalInternals) =>
      set(() => ({ modalInternals: modalInternals })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setDashboardCursor: (dashboardCursor) =>
      set(() => ({ dashboardCursor: dashboardCursor })),
  }));
};
