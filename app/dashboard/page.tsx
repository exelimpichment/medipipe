import MainTagContainer from '../common/mainTag-container';
import WidthContainer from '../common/width-container';
import DashboardFilters from './components/DashboardFilters';
import DashboardHeading from './components/DashboardHeading';
import DashboardPagination from './components/DashboardPagination';
import Table from './components/DashboardTable';
import TableBody from './components/DashboardTable/TableBody';
import TableHead from './components/DashboardTable/TableHead';

const Dashboard = async () => {
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
          <DashboardPagination />
        </WidthContainer>
      </MainTagContainer>
      <p className="pt-36"></p>
    </>
  );
};

export default Dashboard;
