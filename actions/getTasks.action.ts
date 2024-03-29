'use server';

import { getTasksDTO } from '@/data-access/tasks/getTasks-dto';
import { TasksSchemaType } from '@/types';

export const getTasks = async (searchParams: TasksSchemaType) => {
  return await getTasksDTO(searchParams);
};
