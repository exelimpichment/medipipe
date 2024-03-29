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
        variant={'outline'}
        className="w-full"
      >
        <IoLogoGoogle size={20} />
        <span className="pl-2">Sign up with Google</span>
      </Button>
    </>
  );
};

export default SignWithGoogle;
