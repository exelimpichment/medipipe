import { getTasks } from '@/actions/tasks';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = async ({
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
    <table className="mt-4 flex w-full flex-col rounded-md ">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TableHead />
        <TableBody />
      </HydrationBoundary>
    </table>
  );
};

export default Table;
