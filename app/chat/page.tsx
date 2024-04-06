import { chatSearchParamsSchema } from '@/actions/schemas/chatSchemas';
import { getConversations } from '@/data-access/chat/conversations/getConversations';
import { getMessages } from '@/data-access/chat/messages/getMessages';
import { ChatSearchParams } from '@/types';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import Messages from './communication/Messages';
import Conversations from './groups/Conversations';
import NoChats from './noChats/NoChats';

const Chat = async ({ searchParams }: { searchParams: ChatSearchParams }) => {
  const validatedGroupId = chatSearchParamsSchema.safeParse(
    searchParams.groupId
  );
  const groupId = validatedGroupId.success ? validatedGroupId.data : 0;

  const queryClient = new QueryClient();

  const conversationsList = getConversations();

  const messagesList = queryClient.fetchQuery({
    queryKey: [groupId],
    queryFn: () => getMessages({ groupId }),
  });

  const [conversations] = await Promise.all([conversationsList, messagesList]);

  if (conversations.conversations.length === 0) {
    return <NoChats />;
  }

  return (
    <main className="overflow-hidden  border-t">
      <div className="flex h-full">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Conversations />
          <Messages />
        </HydrationBoundary>
      </div>
    </main>
  );
};

export default Chat;
