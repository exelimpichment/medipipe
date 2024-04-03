'use client';
import { createChat } from '@/actions/createChat.action';
import { generateChatName, generateFilteredUsers } from '@/app/chat/utils';
import { useAppStore } from '@/app/store/StoreProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GetUsersReturnType } from '@/types';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';
import ChatModalUserCard from './ChatModalUserCard';

const AddChatModalInner: React.FC<Exclude<GetUsersReturnType, undefined>> = ({
  users,
  success,
}) => {
  const [
    chatModalInput,
    setChatModalInput,
    selectedChatModalCards,
    onClose,
    resetModalCart,
  ] = useAppStore(
    useShallow((state) => [
      state.chatModalInput,
      state.setChatModalInput,
      state.selectedChatModalCards,
      state.onClose,
      state.resetModalCart,
    ])
  );

  const handleClick = async () => {
    try {
      await createChat(
        selectedChatModalCards,
        generateChatName(
          generateFilteredUsers(users, chatModalInput),
          selectedChatModalCards
        )
      );
      // onClose();
      // resetModalCart();
      toast.success('Conversation created');
    } catch (error) {
      toast.error('Please try again');
    }
  };

  return (
    <div className="mt-8">
      <Input
        className="mb-2"
        value={chatModalInput}
        onChange={(e) => setChatModalInput(e.target.value)}
      />
      <div className="h-72 overflow-auto">
        {generateFilteredUsers(users, chatModalInput).map((user) => (
          <ChatModalUserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email ?? ''}
            image={user.image ?? ''}
          />
        ))}

        {generateFilteredUsers(users, chatModalInput).length === 0 && (
          <p className="mt-4 text-center text-gray-500">No users found</p>
        )}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <Button
          className="h-[35px]"
          onClick={handleClick}
          disabled={selectedChatModalCards.length < 1}
          variant={'default'}
        >
          Create
        </Button>
        <Button
          className="h-[35px]"
          disabled={selectedChatModalCards.length < 1}
          variant={'secondary'}
          onClick={() => resetModalCart()}
        >
          Unmark
        </Button>
      </div>
    </div>
  );
};

export default AddChatModalInner;
