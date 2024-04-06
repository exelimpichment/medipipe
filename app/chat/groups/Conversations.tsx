import ConversationList from './ConversationList';
import GroupsNavigation from './GroupsNavigation';

const Conversations = () => {
  return (
    <aside className="hidden h-full w-[384px] flex-col  border-r md:flex  lg:w-[420px] ">
      <GroupsNavigation />
      <ConversationList />
    </aside>
  );
};

export default Conversations;
