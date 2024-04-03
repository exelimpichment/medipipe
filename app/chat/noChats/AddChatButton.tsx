'use client';

import { useAppStore } from '@/app/store/StoreProvider';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';

const AddChatButton = () => {
  const [onOpen, setModalInternals] = useAppStore(
    useShallow((state) => [state.onOpen, state.setModalInternals])
  );

  const clickHandler = () => {
    setModalInternals('addChat');
    onOpen();
  };

  return (
    <Button
      className="mx-auto mt-4 rounded-full"
      size="icon"
      variant="default"
      onClick={clickHandler}
    >
      <PlusIcon size={20} />
      <span className="sr-only">Create chat</span>
    </Button>
  );
};

export default AddChatButton;
