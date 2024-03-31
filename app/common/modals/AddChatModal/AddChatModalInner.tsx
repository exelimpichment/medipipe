import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GetUsersReturnType } from '@/types';
import ChatModalUserCard from './ChatModalUserCard';

const AddChatModalInner: React.FC<GetUsersReturnType> = ({
  users,
  success,
}) => {
  return (
    <div className="mt-8">
      <Input className="mb-2" />
      <div className=" h-72 overflow-auto">
        {users.map((user) => (
          <ChatModalUserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email ?? ''}
            image={user.image ?? ''}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <Button className="h-[35px]">Create</Button>
        <Button className="h-[35px]" variant={'secondary'}>
          Unmark
        </Button>
      </div>
    </div>
  );
};

export default AddChatModalInner;
