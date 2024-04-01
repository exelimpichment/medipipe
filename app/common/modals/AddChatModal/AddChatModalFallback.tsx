'use client';

const AddChatModalFallback = () => {
  return (
    <div
      className={
        'mt-10 flex w-full flex-col items-center justify-center gap-4 border border-errorBorderRed bg-errorBgRed '
      }
    >
      <p className="text-4xl">Error...</p>
      <p className=" text-lg text-gray-500">Please, reload the page.</p>
    </div>
  );
};

export default AddChatModalFallback;
