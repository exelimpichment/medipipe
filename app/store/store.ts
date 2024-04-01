import { createStore } from 'zustand/vanilla';

type State = {
  modalInternals: 'addTask' | 'addChat' | null;
  isOpen: boolean;
  dashboardCursor: number | undefined;
  chatModalInput: string;
  selectedChatModalCards: string[];
};

type Action = {
  setModalInternals: (modalInternals: 'addTask' | 'addChat' | null) => void;
  onOpen: () => void;
  onClose: () => void;
  setDashboardCursor: (dashboardCursor: number) => void;
  setChatModalInput: (chatModalInput: string) => void;
  selectModalCard: (modalCard: string) => void;
  resetModalCart: () => void;
};

export type IStore = State & Action;

export const createModalStore = () => {
  return createStore<IStore>()((set) => ({
    isOpen: false,
    modalInternals: null,
    dashboardCursor: undefined,
    chatModalInput: '',
    selectedChatModalCards: [],

    setModalInternals: (modalInternals) =>
      set(() => ({ modalInternals: modalInternals })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setDashboardCursor: (dashboardCursor) =>
      set(() => ({ dashboardCursor: dashboardCursor })),
    setChatModalInput: (chatModalInput) =>
      set(() => ({ chatModalInput: chatModalInput })),
    selectModalCard: (modalCard) =>
      set((state) => {
        const updatedCards = state.selectedChatModalCards.includes(modalCard)
          ? state.selectedChatModalCards.filter((card) => card !== modalCard)
          : [...state.selectedChatModalCards, modalCard];

        return {
          ...state,
          selectedChatModalCards: updatedCards,
        };
      }),

    resetModalCart: () => set(() => ({ selectedChatModalCards: [] })),
  }));
};
