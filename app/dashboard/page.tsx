import MainTagContainer from '../common/mainTag-container';
import WidthContainer from '../common/width-container';
import DashboardFilters from './components/DashboardFilters';
import DashboardHeading from './components/DashboardHeading';
import DashboardPagination from './components/DashboardPagination';
import Table from './components/DashboardTable';

const Dashboard = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <>
      <MainTagContainer>
        <WidthContainer>
          <DashboardHeading />
          <DashboardFilters />
          <Table searchParams={searchParams} />
          <DashboardPagination />
        </WidthContainer>
      </MainTagContainer>
      <p className="pt-36"></p>
    </>
  );
};

export default Dashboard;
