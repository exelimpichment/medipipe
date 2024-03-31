'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const Mailbox = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>LOgOut</Button>
    </div>
  );
};

export default Mailbox;
