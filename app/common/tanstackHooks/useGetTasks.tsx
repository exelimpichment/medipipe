import { getTasks } from '@/actions/getTasks.action';

import { useQuery } from '@tanstack/react-query';

const useGetTasks = (searchParamsKeys: { [x: string]: string }) => {
  return useQuery({
    queryKey: ['tasks', searchParamsKeys],
    queryFn: async () => getTasks(searchParamsKeys),
  });
};

export default useGetTasks;
