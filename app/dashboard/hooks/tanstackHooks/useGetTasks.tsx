import { getTasks } from '@/actions/getTasks.action';
import useSearchParamsKeys from '@/app/dashboard/hooks/useSearchParamsKeys';

import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

const useGetTasks = () => {
  const cursorRef = useRef<number | undefined>(undefined);

  const searchParamsKeys = useSearchParamsKeys();

  return useQuery({
    queryKey: ['tasks', searchParamsKeys],
    queryFn: async () => {
      const tasks = await getTasks(searchParamsKeys, cursorRef.current);
      cursorRef.current = tasks.tasksList[tasks.tasksList.length - 1].id;
      return tasks;
    },
  });
};

export default useGetTasks;
