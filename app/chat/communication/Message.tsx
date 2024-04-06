import { cn } from '@/lib/utils';

const Message = ({
  message,
  isOwner,
}: {
  message: string;
  isOwner: boolean;
}) => {
  return (
    <div className="flex w-[90%]">
      <div
        className={cn(
          'rounded-xl px-3 py-2 text-sm',
          isOwner
            ? 'ml-auto bg-primary text-end text-primary-foreground'
            : ' bg-muted'
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
