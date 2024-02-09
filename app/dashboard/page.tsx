'use client';

import { signOut, useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
      <p>{session?.user?.name}</p>
    </>
  );
};

export default Dashboard;
