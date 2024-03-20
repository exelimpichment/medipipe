// import 'server-only';
'use server';
import prisma from '@/lib/db';

const getTasksDTO = async () => {
  const tasks = await prisma.tasks.findMany();
  return tasks;
};

export default getTasksDTO;
