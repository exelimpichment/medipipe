import { cn } from '@/lib/utils';
import groupImage from '@/public/group.png';
import Image from 'next/image';

interface IConversation {
  groupName: string;
}

const Conversation: React.FC<IConversation> = ({ groupName }) => {
  return (
    <div
      // onClick={() => {
      //   selectModalCard(id);
      // }}
      className={cn(
        'mb-2 flex h-16  cursor-pointer items-center gap-2 rounded-lg border border-black bg-chatCard px-4 py-2 hover:bg-communicationDarkHover'
        // selectedChatModalCards.includes(id)
        //   ? 'bg-communicationDarkHover'
        //   : 'bg-chatCard'
      )}
    >
      <div className="flex  flex-col justify-center">
        <Image
          src={groupImage}
          alt={'user profile image'}
          width={38}
          height={38}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 overflow-hidden whitespace-nowrap">
        <p className="truncate text-sm font-medium">{groupName}</p>
        <p className="truncate text-sm text-muted-foreground">
          You: dlsndnsdksdks dsndksdksbd dsndsd dsndsd dsndsd
        </p>
      </div>
    </div>
  );
};

export default Conversation;
