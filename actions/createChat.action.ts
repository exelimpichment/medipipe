'use server';

import { createChatDTO } from '@/data-access/chat/createChat';

export const createChat = async () => {
  await createChatDTO();
};
