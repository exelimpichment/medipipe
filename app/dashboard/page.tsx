'use client';

import { signOut, useSession } from 'next-auth/react';
import Table from './components/table/Table';

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      <Table />
      <button onClick={() => signOut()}>Sign out</button>
      <p>{session?.user?.name}</p>
    </>
  );
};

export default Dashboard;
