import { tasksSchema } from '@/actions/schema/actionSchema';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { AuthenticationError } from '@/lib/utils';
import 'server-only';

import { TasksSchemaType, User } from '@/types';
import generateDynamicFilter from '../utils/generateDynamicFilter';

function canReceiveTaskList(user: User) {
  // Public info for now, but can change
  return true;
}

export const getTasksDTO = async (searchParams: TasksSchemaType) => {
  const result = tasksSchema.parse(searchParams);

  const tasksList = await prisma.tasks.findMany({
    ...generateDynamicFilter(result),

    select: {
      id: true,
      description: true,
      title: true,
      createdAt: true,

      user: {
        select: {
          id: true,
          name: true,
        },
      },

      status: {
        select: {
          statusName: true,
        },
      },
      priority: {
        select: {
          priorityName: true,
        },
      },
    },
  });

  const tasksCount = await prisma.tasks.count();

  const session = await auth();

  if (!session?.user) {
    throw new AuthenticationError();
  }

  return canReceiveTaskList(session?.user)
    ? { tasksList, tasksCount }
    : { tasksList: [], tasksCount: 0 };
};
