import getTasks from '@/data-access/tasks/tasks-dto';
import { useQuery } from '@tanstack/react-query';

const useGetTasks = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => getTasks(),
  });
};

export default useGetTasks;
