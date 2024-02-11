'use client';

import { signOut } from 'next-auth/react';

import MainTagContainer from '../common/mainTag-container';
import WidthContainer from '../common/width-container';

import DashboardFilters from './components/DashboardFilters';
import DashboardHeading from './components/DashboardHeading';
import Table from './components/table';
// import TableBody from './components/table/TableBody';
import TableHead from './components/table/TableHead/TableHead';

const Dashboard = () => {
  // const { data: session } = useSession();

  return (
    <>
      <MainTagContainer>
        <WidthContainer>
          <DashboardHeading />
          <DashboardFilters />
          <Table>
            <TableHead />
            {/* <TableBody /> */}
          </Table>
        </WidthContainer>
      </MainTagContainer>
      <button onClick={() => signOut()}>Sign out</button>
      {/* <p>{session?.user?.name}</p> */}
    </>
  );
};

export default Dashboard;
