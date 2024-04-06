'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getMessages } from '@/data-access/chat/messages/getMessages';
import { useQuery } from '@tanstack/react-query';
import { Paperclip, Send } from 'lucide-react';
import useSetChat from '../hooks/useSetChat';
import Message from './Message';

const messages = [
  {
    role: 'agent',
    content: 'Hi, how can I help you today?',
  },
  {
    role: 'user',
    content:
      'What seems to be the problem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae consequatur rem, quia quis dolorem odio fugiat asperiores magni accusantium.',
  },
  {
    role: 'agent',
    content:
      'What seems to be the problem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae consequatur rem, quia quis dolorem odio fugiat asperiores magni accusantium.',
  },
  {
    role: 'user',
    content: "I can't log in.",
  },
];

const Messages = () => {
  const { sanitizedGroupId: groupId } = useSetChat();

  const { data, isPending, isError } = useQuery({
    queryKey: [groupId],
    queryFn: () => getMessages({ groupId }),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  console.log(data.messages);

  return (
    <div className="mb-5 flex w-full flex-col items-center">
      <div className="flex h-full w-full flex-col items-center gap-2 overflow-y-scroll py-2">
        {data.messages.map((message) => (
          <Message
            key={message.messageId}
            message={message.message}
            isOwner={message.userId === data.currentUserId}
          />
        ))}
      </div>
      <div className="relative flex w-[90%]">
        <Textarea
          rows={1}
          className="h-6 w-full resize-none rounded-xl px-2 py-1 pr-11"
          placeholder="Type your message here..."
        />
        <div className="absolute right-2 top-1/2 flex translate-y-[-50%] flex-col gap-1">
          <Button
            type={'button'}
            className="flex h-8 w-8  items-center justify-center rounded-full p-1"
          >
            <Send size={18} className="translate-x-[-1px] translate-y-[1px]" />
          </Button>
          <Button
            type={'button'}
            className="flex h-8 w-8 items-center justify-center rounded-full p-1"
          >
            <Paperclip size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
