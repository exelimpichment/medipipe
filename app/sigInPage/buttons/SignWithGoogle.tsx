'use client';
import { Button } from '@/components/ui/button';
import { signIn, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { IoLogoGoogle } from 'react-icons/io';

const SignWithGoogle = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard';

  return (
    <>
      <Button
        onClick={() => signIn('google', { callbackUrl })}
        type="button"
        className="h-9 w-full space-x-1 rounded-[6px] border border-zinc-200 bg-transparent hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
      >
        <IoLogoGoogle size={20} />

        <span>Sign up with Google</span>
      </Button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default SignWithGoogle;
