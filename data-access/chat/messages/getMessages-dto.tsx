import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { AuthenticationError } from '@/lib/utils';
import 'server-only';

const getMessagesDTO = async ({ groupId }: { groupId: number }) => {
  const session = await auth();

  if (!session?.user) {
    throw new AuthenticationError();
  }

  const currentUserId = session.user.id;

  console.log(currentUserId);

  const messages = await prisma.messages.findMany({
    where: {
      groupId: 15,
      // group: {
      //   groupUsers: {
      //     some: {
      //       userId: currentUserId,
      //     },
      //   },
      // },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return { success: true, currentUserId, messages };
};

export default getMessagesDTO;
