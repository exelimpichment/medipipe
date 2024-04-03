import { getConversations } from '@/data-access/conversations/getConversations';
import Messages from './communication/Messages';
import Conversations from './groups/Conversations';
import NoChats from './noChats/NoChats';

const Chat = async () => {
  const response = await getConversations();

  if (response.conversations.length === 0) return <NoChats />;

  return (
    <main className="overflow-hidden  border-t">
      <div className="flex h-full">
        <Conversations conversations={response.conversations} />
        <Messages />
      </div>
    </main>
  );
};

export default Chat;
