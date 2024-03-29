import { signIn } from 'next-auth/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

type IUseEmailSubmit = {
  email: string;
  isLoading: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  signInWithEmail: () => void;
};

const useEmailSubmit = (): IUseEmailSubmit => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailSchema = z
    .string()
    .email({ message: 'Please enter valid email address' });

  const signInWithEmail = async () => {
    try {
      setIsLoading(true);
      emailSchema.parse(email);
      await signIn('email', { email });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message);
        setIsLoading(false);
        return;
      }
      toast.error('Something went wrong. Please retry.');
    }
  };

  return { email, isLoading, setEmail, signInWithEmail };
};

export default useEmailSubmit;
