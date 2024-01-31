'use client';

import { signOut } from 'next-auth/react';

const Dashboard = () => {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Dashboard;
