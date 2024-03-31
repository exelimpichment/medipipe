import { getUsers } from '@/data-access/users/getUsers';
import AddChatModalInner from './AddChatModalInner';

const AddChatModal = async () => {
  const response = await getUsers();

  return (
    <AddChatModalInner users={response.users} success={response.success} />
  );
};

export default AddChatModal;
