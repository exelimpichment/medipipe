import { deleteTask } from '@/actions/deleteTask.action';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import useSearchParamsKeys from './useSearchParamsKeys';

const useTaskDelete = () => {
  const searchParamsKeys = useSearchParamsKeys();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: number) => deleteTask(taskId),
    onMutate: async (taskId) => {
      const previousTasks = queryClient.getQueryData([
        'tasks',
        searchParamsKeys,
      ]);
      queryClient.setQueryData(['tasks', searchParamsKeys], (oldTasks: any) => {
        const updatedTasks = oldTasks.filter(
          (task: any) => task.taskId !== taskId
        );
        return updatedTasks;
      });

      return { previousTasks };
    },
    onError: (err, newTask, context) => {
      queryClient.setQueryData(
        ['tasks', searchParamsKeys],
        context?.previousTasks
      );
      toast.error('Please retry later');
    },
    onSuccess: (err, newTask) => {
      toast.success(`Task-${newTask} was deleted`);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks', searchParamsKeys],
      });
    },
  });
};

export default useTaskDelete;
