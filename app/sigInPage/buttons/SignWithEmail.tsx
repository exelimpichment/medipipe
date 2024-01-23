'use client';

import { Button } from '@/components/ui/button';

const SignWithEmail = () => {
  return (
    <Button
      type="button"
      className="h-9 w-full rounded-[6px] bg-zinc-900 text-zinc-50 hover:bg-slate-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-slate-50"
    >
      Sign In with Email
    </Button>
  );
};

export default SignWithEmail;
