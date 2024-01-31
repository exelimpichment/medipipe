'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const Dashboard = () => {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
      <Button variant="destructive">Button</Button>
    </>
  );
};

export default Dashboard;
