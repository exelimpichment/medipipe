import { tasksSchema } from '@/actions/schema/actionSchema';
import { z } from 'zod';

export type TasksSchemaType = z.infer<typeof tasksSchema>;

export type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
