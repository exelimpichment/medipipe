import { getTasks } from '@/actions/tasks';
import { useQuery } from '@tanstack/react-query';

const useGetTasks = (
  keyValueArray: {
    [x: string]: string;
  }[]
) => {
  const searchParams = keyValueArray.reduce((acc, obj) => {
    for (const key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});

  return useQuery({
    queryKey: ['tasks', searchParams],
    queryFn: async () => getTasks(searchParams),
  });
};

export default useGetTasks;
