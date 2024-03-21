'use server';

import { getTasksDTO } from '@/data-access/tasks/tasks-dto';

export const getTasks = async () => {
  return getTasksDTO();
};
