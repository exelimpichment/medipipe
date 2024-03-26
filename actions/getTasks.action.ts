'use server';

import { getTasksDTO } from '@/data-access/tasks/getTasks-dto';
import { getTaskParam } from '@/types';

export const getTasks = async (searchParams: getTaskParam) => {
  return getTasksDTO(searchParams);
};
