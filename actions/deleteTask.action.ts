'use server';

import { deleteTaskDTO } from '@/data-access/tasks/deleteTask-dto';

export const deleteTask = async (userId: number) => {
  return deleteTaskDTO(userId);
};
