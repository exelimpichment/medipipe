'use client';

import { signOut } from 'next-auth/react';

import MainTagContainer from '../common/mainTag-container';
import WidthContainer from '../common/width-container';

import DashboardFilters from './components/DashboardFilters';
import DashboardHeading from './components/DashboardHeading';
import Table from './components/DashboardTable';
// import TableBody from './components/table/TableBody';

import TableBody from './components/DashboardTable/TableBody';
import TableHead from './components/DashboardTable/TableHead/TableHead';

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
            <TableBody />
          </Table>
        </WidthContainer>
      </MainTagContainer>
      <p className="mt-36">margin</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Dashboard;
