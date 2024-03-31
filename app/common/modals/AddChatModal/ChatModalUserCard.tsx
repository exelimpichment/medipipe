import Image from 'next/image';

interface IChatModalUserCard {
  id: string;
  name: string;
  email: string;
  image: string;
}

const ChatModalUserCard: React.FC<IChatModalUserCard> = ({
  id,
  name,
  email,
  image,
}) => {
  return (
    <div className="mb-2 flex h-16 cursor-pointer items-center gap-2 rounded-lg border border-black bg-chatCard px-4 py-2">
      <div className="">
        <Image
          src={image}
          alt={'user profile image'}
          width={38}
          height={38}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col  gap-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
};

export default ChatModalUserCard;
