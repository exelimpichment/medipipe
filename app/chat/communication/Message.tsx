import { cn } from '@/lib/utils';

const Message = ({ message, role }: { message: string; role: string }) => {
  return (
    <div
      className={cn(
        'max-w-[60%]  rounded-xl px-3 py-2 text-sm',
        role === 'user'
          ? 'ml-auto bg-primary text-end text-primary-foreground'
          : 'bg-muted '
      )}
    >
      {message}
    </div>
  );
};

export default Message;
