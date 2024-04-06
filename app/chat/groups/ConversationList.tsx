import { getConversations } from '@/data-access/chat/conversations/getConversations';
import Conversation from './Conversation';

const ConversationList = async () => {
  const { conversations } = await getConversations();
  return (
    <div className="">
      <div className=" p-2 ">
        {conversations.map((conversation) => (
          <Conversation
            key={conversation.groupId}
            groupName={conversation.groupName}
            groupId={conversation.groupId}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
