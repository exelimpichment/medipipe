import prisma from '@/lib/db';
import { generateTasks } from './generateTasks';

async function main() {
  const tasks = await prisma.tasks.createMany({
    data: generateTasks(),
    skipDuplicates: true,
  });

  console.log(tasks);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
