'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';

interface ISignWithGoogle {
  isLoading?: boolean;
  onClick?: () => void;
}

const defaultProps: ISignWithGoogle = {
  isLoading: false,
  onClick: () => {},
};

const SignWithGoogle: React.FC<ISignWithGoogle> = (props = defaultProps) => {
  return (
    <>
      <Button
        disabled={props.isLoading}
        onClick={props.onClick}
        type="button"
        className="h-9 w-full space-x-1 rounded-[6px] border border-zinc-200 bg-transparent py-3 text-black hover:bg-zinc-100 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800"
      >
        <IoLogoGoogle size={20} />
        <span>Sign up with Google</span>
      </Button>
    </>
  );
};

export default SignWithGoogle;
