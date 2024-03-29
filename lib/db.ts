import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  const prisma = new PrismaClient({
    // log: ['query'],
  });

  return prisma;
};

declare global {
  // eslint-disable-next-line
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
