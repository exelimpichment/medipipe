import { IConversations } from '@/types';
import ConversationList from './ConversationList';
import GroupsNavigation from './GroupsNavigation';

const Conversations: React.FC<IConversations> = ({ conversations }) => {
  return (
    <aside className="hidden h-full w-[384px] flex-col  border-r md:flex  lg:w-[420px] ">
      <GroupsNavigation />
      <ConversationList conversations={conversations} />
    </aside>
  );
};

export default Conversations;
