const QuoteComponent = () => {
  return (
    <div className="hidden h-full w-[50vw] flex-col justify-end bg-zinc-900 p-16 md:flex">
      <div className="text-lg text-white">
        <p className="flex flex-col gap-5">
          <q className="text-lg" cite="https://chat.openai.com/">
            {
              'Elevating Your CRM Experience, Eradicating Lag – Where Bleeding-Edge Technology Meets Seamless Performance!'
            }
          </q>
          <span className="text-sm">- Mike Wazowski</span>
        </p>
      </div>
    </div>
  );
};

export default QuoteComponent;
