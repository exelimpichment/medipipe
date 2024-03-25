import { getTasks } from '@/actions/getTasks.action';
import useSearchParamsKeys from '@/app/dashboard/hooks/useSearchParamsKeys';

import { useQuery } from '@tanstack/react-query';

const useGetTasks = () => {
  const searchParamsKeys = useSearchParamsKeys();
  return useQuery({
    queryKey: ['tasks', searchParamsKeys],
    queryFn: async () => getTasks(searchParamsKeys),
  });
};

export default useGetTasks;
