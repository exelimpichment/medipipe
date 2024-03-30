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
  return (
    <div className="m-4 flex flex-1 flex-col gap-2">
      {messages.map((message, index) => (
        <Message key={index} message={message.content} role={message.role} />
      ))}
    </div>
  );
};

export default Messages;
