import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { AuthenticationError } from '@/lib/utils';
import 'server-only';

export const getConversationsDTO = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new AuthenticationError();
  }

  const conversations = await prisma.groups.findMany({
    select: {
      groupId: true,
      groupName: true,
      groupUsers: {
        where: {
          userId: session.user.id,
        },
      },
    },
  });
  console.log(conversations);

  return { conversations };
};
