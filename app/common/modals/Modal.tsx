'use client';

import { useAppStore } from '@/app/store/StoreProvider';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

const Modal = ({ children }: { children: React.ReactNode[] }) => {
  const [isOpen, onClose, modalInternals, setModalInternals] = useAppStore(
    useShallow((state) => [
      state.isOpen,
      state.onClose,
      state.modalInternals,
      state.setModalInternals,
    ])
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const clickHandler = async () => {
    onClose();
    await delay(150);
    setModalInternals(null);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="h-[460px]">
        <DialogClose asChild>
          <Button
            type="button"
            variant="ghost"
            className="absolute right-4 top-4 h-8 w-8 rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            onClick={clickHandler}
          >
            <X />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
        {modalInternals === 'addTask' && children?.[0]}
        {modalInternals === 'addChat' && children?.[1]}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
