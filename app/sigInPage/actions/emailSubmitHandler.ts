import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { z } from 'zod';

export const emailSubmitHandler = (email: string): void => {
  const emailSchema = z
    .string()
    .email({ message: 'Please enter valid email address' });

  try {
    emailSchema.parse(email);
    signIn('email', { email });
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast.error(error.issues[0].message);
      return;
    }
    toast.error('Something went wrong. Please retry.');
  }
};
