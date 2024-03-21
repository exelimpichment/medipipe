import { getTasks } from '@/actions/tasks';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { headers } from 'next/headers';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = async ({ children }: { children: React.ReactNode }) => {
  const headersList = headers();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  return (
    <table className="mt-4 flex w-full flex-col rounded-md ">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TableHead />
        <TableBody />
      </HydrationBoundary>
    </table>
  );
};

export default Table;
