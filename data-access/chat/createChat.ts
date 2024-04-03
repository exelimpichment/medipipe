import 'server-only';

import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { AuthenticationError } from '@/lib/utils';

export const createChatDTO = async (
  chatMembersArr: string[],
  chatName: string
) => {
  const session = await auth();

  console.log(session);
  console.log(chatMembersArr);
  console.log(chatName);
  console.log(session?.user?.id);

  if (!session?.user) {
    throw new AuthenticationError();
  }

  const combinedArray = [
    ...new Set([...chatMembersArr, session?.user?.id]),
  ].map((member) => {
    return { userId: member };
  });

  const result = await prisma.groups.create({
    data: {
      groupName: chatName,
      groupUsers: {
        create: combinedArray,
      },
    },
  });

  console.log(result);

  return 'success';
};
