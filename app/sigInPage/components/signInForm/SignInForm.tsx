'use client';

import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import useCallbackUrl from '../../hooks/useCallbackUrl';
import useEmailSubmit from '../../hooks/useEmailSubmit';
import SignWithEmailButton from '../SignWithEmailButton/SignWithEmailButton';
import SignWithGoogle from '../signWithGoogleButton/SignWithGoogleButton';

const SignInForm = () => {
  const { email, isLoading, setEmail, signInWithEmail } = useEmailSubmit();
  const callbackUrl = useCallbackUrl();

  return (
    <div className="mx-auto flex w-[350px]  flex-col  items-center">
      <h2 className="text-2xl font-semibold tracking-tight">
        Create an account
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        Enter your email below to create your account
      </p>

      <label htmlFor="email" className="sr-only">
        Fill in your email:
      </label>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="name@example.com"
        className=" mb-2 mt-5 flex h-9 w-full flex-col justify-center rounded-[6px] border-zinc-200 px-3 py-1 text-sm placeholder:text-slate-400 focus:border-gray-400 focus-visible:ring-1 focus-visible:ring-offset-0 dark:border-zinc-800 dark:focus:border-white"
      />
      <SignWithEmailButton isLoading={isLoading} onClick={signInWithEmail} />

      <div className="my-6 flex w-full items-center justify-center">
        <div className="h-[1px] flex-grow bg-gray-400"></div>
        <p className="bg-background px-2 text-sm uppercase text-gray-400 after:dark:h-2 after:dark:w-7 after:dark:bg-slate-50">
          OR CONTINUE WITH
        </p>
        <div className="h-[1px] flex-grow bg-gray-400"></div>
      </div>

      <SignWithGoogle
        isLoading={isLoading}
        onClick={() => signIn('google', { callbackUrl })}
      />
      <p className="m-auto mt-6 w-72 text-center text-sm text-gray-400">
        Upon administrator confirmation, your access will be granted.
      </p>
    </div>
  );
};

export default SignInForm;
