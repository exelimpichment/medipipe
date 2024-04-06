'use server';
import getMessagesDTO from './getMessages-dto';

export const getMessages = async ({ groupId }: { groupId: number }) => {
  return await getMessagesDTO({ groupId });
};
