import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { AuthenticationError, ValidationError } from '@/lib/utils';
import 'server-only';
import { z } from 'zod';

export const deleteTaskDTO = async (taskId: number) => {
  const session = await auth();

  const deleteTaskSchema = z.number();
  const result = deleteTaskSchema.safeParse(taskId);

  if (!result.success) {
    throw new ValidationError();
  }

  if (!session?.user) {
    throw new AuthenticationError();
  }

  const deleteTask = await prisma.tasks.delete({
    where: {
      id: taskId,
    },
  });

  return { success: true, deletedTask: deleteTask };
};
