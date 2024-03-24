import { getTasks } from '@/actions/tasks';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import MainTagContainer from '../common/mainTag-container';
import WidthContainer from '../common/width-container';
import DashboardFilters from './components/DashboardFilters';
import DashboardHeading from './components/DashboardHeading';
import DashboardPagination from './components/DashboardPagination';
import Table from './components/DashboardTable';
import TableLoadingIndicator from './components/DashboardTable/TableBody/TableLoadingIndicator';

const Dashboard = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['tasks', searchParams],
    queryFn: () => getTasks(searchParams),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainTagContainer>
          <WidthContainer>
            <DashboardHeading />
            <DashboardFilters />
            <Table searchParams={searchParams} />
            <DashboardPagination />
          </WidthContainer>
        </MainTagContainer>
        <TableLoadingIndicator />
      </HydrationBoundary>
      {/* <p className="pt-36"></p> */}
    </>
  );
};

export default Dashboard;
