import { createStore } from 'zustand/vanilla';

type State = {
  modalInternals: 'addTask' | 'addChat' | null;
  isOpen: boolean;
  dashboardCursor: number | undefined;
};

type Action = {
  setModalInternals: (modalInternals: 'addTask' | 'addChat' | null) => void;
  onOpen: () => void;
  onClose: () => void;
  setDashboardCursor: (dashboardCursor: number) => void;
};

export type IStore = State & Action;

export const createModalStore = () => {
  return createStore<IStore>()((set) => ({
    isOpen: false,
    modalInternals: null,
    dashboardCursor: undefined,

    setModalInternals: (modalInternals) =>
      set(() => ({ modalInternals: modalInternals })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setDashboardCursor: (dashboardCursor) =>
      set(() => ({ dashboardCursor: dashboardCursor })),
  }));
};
