'use server';

import { getConversationsDTO } from './conversations-dto';

export const getConversations = async () => {
  return getConversationsDTO();
};
