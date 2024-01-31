'use client';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { IoLogoGoogle } from 'react-icons/io';
import useCallbackUrl from '../hooks/useCallbackUrl';

const SignWithGoogle = () => {
  const callbackUrl = useCallbackUrl();

  return (
    <>
      <Button
        onClick={() => signIn('google', { callbackUrl })}
        type="button"
        variant="default"
        className="h-9 w-full space-x-1 rounded-[6px] border border-zinc-200 bg-transparent hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
      >
        <IoLogoGoogle size={20} />

        <span>Sign up with Google</span>
      </Button>
    </>
  );
};

export default SignWithGoogle;
