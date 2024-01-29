import Link from 'next/link';

const RegisterFirst = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="rounded-[6px] border border-zinc-200  bg-white p-8 sm:max-w-[425px] dark:border-zinc-800 dark:bg-transparent">
        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-bold">Oops...</h2>
          <p className=" dark:text-zinc-50">
            Please create your account with the Google provider to use a magic
            link in the future.
          </p>
        </div>
        <div className="mt-4">
          <Link className="font-light text-blue-400 underline " href="/">
            Back to register page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterFirst;
