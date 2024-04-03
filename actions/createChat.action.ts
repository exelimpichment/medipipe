'use server';

import { createChatDTO } from '@/data-access/chat/createChat';
import { z } from 'zod';

export const createChat = async (
  chatMembersArr: string[],
  chatName: string
) => {
  const createChatSchema = z.object({
    chatMembersArr: z.array(z.string()),
    chatName: z.string(),
  });

  const chatSchemaParsingResult = createChatSchema.parse({
    chatMembersArr,
    chatName,
  });

  await createChatDTO(
    chatSchemaParsingResult.chatMembersArr,
    chatSchemaParsingResult.chatName
  );
};
