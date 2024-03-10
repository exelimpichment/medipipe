'use client';

import { useModalStore } from '@/app/store/ModalStoreProvider';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
const AddTaskModal = dynamic(() => import('./AddTaskModal'));

const ModalWrapper = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);
  const modalInternals = useModalStore((state) => state.modalInternals);
  const setModalInternals = useModalStore((state) => state.setModalInternals);

  const clickHandler = async () => {
    onClose();
    await delay(150);
    setModalInternals(null);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
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
        {modalInternals === 'addTask' && <AddTaskModal />}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
