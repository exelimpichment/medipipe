import { tasksSchema } from '@/actions/schema/actionSchema';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import 'server-only';
import { z } from 'zod';

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

type TasksSchemaType = z.infer<typeof tasksSchema>;

export const getTasksDTO = async (searchParams: TasksSchemaType) => {
  const dynamicFilter: {
    take: 10 | 20 | 30 | 40 | 50;
    where: {
      title?: {
        contains: string;
      };
      status?: {
        statusName: 'in progress' | 'todo' | 'done' | 'canceled';
      };
      priority?: {
        priorityName: 'high' | 'low' | 'medium';
      };
      createdAt?: {
        lt?: Date;
        gt?: Date;
      };
    };
  } = { take: 10, where: {} };

  if (searchParams.search) {
    dynamicFilter.where.title = {
      contains: searchParams.search,
    };
  }

  if (searchParams.status) {
    dynamicFilter.where.status = {
      statusName: searchParams.status,
    };
  }

  if (searchParams.priority) {
    dynamicFilter.where.priority = {
      priorityName: searchParams.priority,
    };
  }

  if (searchParams.from) {
    dynamicFilter.where.createdAt = {
      gt: new Date(searchParams.from),
    };
  }

  if (searchParams.to) {
    dynamicFilter.where.createdAt = {
      lt: new Date(searchParams.to),
    };
  }

  if (searchParams.limit) {
    const limit = Number(searchParams.limit);
    if ([10, 20, 30, 40, 50].includes(limit)) {
      dynamicFilter.take = limit as 10 | 20 | 30 | 40 | 50;
    }
  }

  const tasksList = await prisma.tasks.findMany({
    ...dynamicFilter,
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
