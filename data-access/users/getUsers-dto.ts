import { auth } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { AuthenticationError } from '@/lib/utils';
import { User } from '@prisma/client';
import 'server-only';

export const getUsersDTO = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new AuthenticationError();
  }

  const userList = await prisma?.user.findMany({});

  const userMapper = (users: User[]) => {
    return users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      };
    });
  };

  const mappedUsers = userMapper(userList);

  return { success: true, users: mappedUsers };
};
