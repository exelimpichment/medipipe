import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import 'server-only';

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

function canReceiveTaskList(user: User) {
  // Public info for now, but can change
  return true;
}

export const getTasksDTO = async () => {
  const tasksList = await prisma.tasks.findMany({
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
