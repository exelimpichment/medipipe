import AddChatButton from './AddChatButton';

const NoChats = () => {
  return (
    <main className="overflow-hidden">
      <div className="flex h-full w-full items-center justify-center border-t">
        <div className="flex min-h-[70vh] items-center justify-center px-4 text-center">
          <div className="space-y-2">
            <p className="text-lg font-medium leading-none sm:text-xl md:text-2xl">
              There are no chats yet.
            </p>
            <p className="text-sm leading-none text-gray-500 md:text-base dark:text-gray-400">
              You can create one.
            </p>
            <AddChatButton />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NoChats;
