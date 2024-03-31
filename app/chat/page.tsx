'use client';

import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import { useAppStore } from '../store/StoreProvider';

const Chat = () => {
  const [onOpen, setModalInternals] = useAppStore(
    useShallow((state) => [state.onOpen, state.setModalInternals])
  );

  const clickHandler = () => {
    setModalInternals('addChat');
    onOpen();
  };

  return (
    <main className="overflow-hidden">
      <div className="flex h-full w-full items-center justify-center border-t">
        <div className="flex min-h-[70vh] items-center justify-center px-4 text-center">
          <div className="space-y-2">
            <p className="text-lg font-medium leading-none sm:text-xl md:text-2xl">
              There are no chats yet.
            </p>
            <p className="text-sm leading-none text-gray-500 md:text-base dark:text-gray-400">
              You can create one.
            </p>
            <Button
              className="mx-auto mt-4 rounded-full"
              size="icon"
              variant="default"
              onClick={clickHandler}
            >
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">Create chat</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
