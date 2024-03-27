'use server';

import { getTasksDTO } from '@/data-access/tasks/getTasks-dto';
import { TasksSchemaType } from '@/types';

export const getTasks = async (
  searchParams: TasksSchemaType,
  cursor: undefined | number
) => {
  console.log(cursor);

  return await getTasksDTO(searchParams, cursor);
};
