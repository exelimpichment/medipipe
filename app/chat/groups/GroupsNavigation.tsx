'use client';
import { useAppStore } from '@/app/store/StoreProvider';
import { Button } from '@/components/ui/button';
import { MessageCirclePlus, User, Users } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';

const GroupsNavigation = () => {
  const [onOpen, setModalInternals] = useAppStore(
    useShallow((state) => [state.onOpen, state.setModalInternals])
  );

  const clickHandler = () => {
    setModalInternals('addChat');
    onOpen();
  };

  return (
    <div className="flex h-14 items-center justify-around px-1 pb-0 pt-2">
      <Button
        variant={'ghost'}
        className="flex h-12 items-center justify-center rounded-full p-2"
      >
        <User size={30} />
        <span className="sr-only">Private chats</span>
      </Button>
      <Button
        variant={'ghost'}
        className="flex h-12 items-center justify-center rounded-full p-2"
      >
        <Users size={30} />
        <span className="sr-only">Group chats</span>
      </Button>
      <Button
        variant={'ghost'}
        className="flex h-12 items-center justify-center rounded-full p-2"
        onClick={clickHandler}
      >
        <span className="sr-only">Create chat</span>
        <MessageCirclePlus size={30} />
      </Button>
    </div>
  );
};

export default GroupsNavigation;
