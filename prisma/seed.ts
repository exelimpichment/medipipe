import { PrismaClient } from '@prisma/client';
import { generateTasks } from './generateTasks';

const prisma = new PrismaClient();

async function main() {
  const tasks = await prisma.tasks.createMany({
    data: generateTasks(),
    skipDuplicates: true,
  });
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
