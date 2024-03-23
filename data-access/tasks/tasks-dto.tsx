import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import 'server-only';
import { TasksSchemaType, User } from '../types/taskTypes';
import generateDynamicFilter from '../utils/generateDynamicFilter';

function canReceiveTaskList(user: User) {
  // Public info for now, but can change
  return true;
}

export const getTasksDTO = async (searchParams: TasksSchemaType) => {
  const tasksList = await prisma.tasks.findMany({
    ...generateDynamicFilter(searchParams),

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

  const session = await auth();
  return canReceiveTaskList(session?.user) ? tasksList : null;
};
