import { tasksSchema } from '@/actions/schema/actionSchema';
import { z } from 'zod';

// export type getTaskParam = {
//   [key: string]: string | string[] | undefined;
// };

export type Tasks = {
  tasksList: {
    id: number;
    description: string;
    title: string;
    createdAt: Date;
    user: { id: string; name: string };
    status: { statusName: string };
    priority: { priorityName: string };
  }[];
  tasksCount: number;
};

export type TasksSchemaType = z.infer<typeof tasksSchema>;

export type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
