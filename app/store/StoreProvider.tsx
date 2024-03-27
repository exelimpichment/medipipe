'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore, type StoreApi } from 'zustand';
import { IStore, createModalStore } from './store';

export const ModalStoreContext = createContext<StoreApi<IStore> | null>(null);

export interface ModalStoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: ModalStoreProviderProps) => {
  const storeRef = useRef<StoreApi<IStore>>();
  if (!storeRef.current) {
    storeRef.current = createModalStore();
  }

  return (
    <ModalStoreContext.Provider value={storeRef.current}>
      {children}
    </ModalStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: IStore) => T): T => {
  const modalStoreContext = useContext(ModalStoreContext);

  if (!modalStoreContext) {
    throw new Error(`useAppStore must be used within StoreProvider`);
  }

  return useStore(modalStoreContext, selector);
};
