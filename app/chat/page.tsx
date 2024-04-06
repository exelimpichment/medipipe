import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { z } from 'zod';
import Messages from './communication/Messages';
import Conversations from './groups/Conversations';

type SearchParams = {
  [key: string]: string | string[] | undefined;
  groupId?: string; // groupId is optional
};

const chatSchema = z.coerce.number();

const Chat = async ({ searchParams }: { searchParams: SearchParams }) => {
  const validatedGroupId = chatSchema.safeParse(searchParams.groupId);
  console.log(validatedGroupId);
  const groupId = validatedGroupId.success ? validatedGroupId.data : 0;

  const queryClient = new QueryClient();

  // const response = await queryClient.fetchQuery({
  //   queryKey: [groupId],
  //   queryFn: () => getMessages({ groupId }),
  // });

  // if (response.messages.length === 0) {
  //   return <NoChats />;
  // }

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
