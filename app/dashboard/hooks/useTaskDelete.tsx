import { deleteTask } from '@/actions/deleteTask.action';
import { Tasks } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import useSearchParamsKeys from './useSearchParamsKeys';

const useTaskDelete = () => {
  const searchParamsKeys = useSearchParamsKeys();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: number) => {
      console.log(taskId);
      return deleteTask(taskId);
    },

    onMutate: async (newTask) => {
      await queryClient.cancelQueries({
        queryKey: ['tasks', searchParamsKeys],
      });

      const previousTasks = queryClient.getQueryData([
        'tasks',
        searchParamsKeys,
      ]);

      queryClient.setQueryData(
        ['tasks', searchParamsKeys],
        (oldTasks: Tasks) => {
          const mutatedUpdate = oldTasks.tasksList.filter(
            (oldTask) => oldTask.id !== newTask
          );

          return { tasksList: mutatedUpdate };
        }
      );

      return { previousTasks };
    },

    onError: (err, newTodo, context) => {
      if (context)
        queryClient.setQueryData(
          ['tasks', searchParamsKeys],
          context.previousTasks
        );
      toast.error('Please retry later');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', searchParamsKeys] });
    },
  });
};

export default useTaskDelete;
