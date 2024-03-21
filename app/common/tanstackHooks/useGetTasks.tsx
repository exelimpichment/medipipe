import { getTasks } from '@/actions/tasks';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetTasks = () => {
  return useSuspenseQuery({
    queryKey: ['tasks'],
    queryFn: async () => getTasks(),
  });
};

export default useGetTasks;
