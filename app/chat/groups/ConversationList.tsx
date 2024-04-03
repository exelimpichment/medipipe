import { IConversations } from '@/types';
import Conversation from './Conversation';

const ConversationList: React.FC<IConversations> = ({ conversations }) => {
  return (
    <div className="">
      <div className=" p-2 ">
        {conversations.map((conversation) => (
          <Conversation
            key={conversation.groupId}
            groupName={conversation.groupName}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
