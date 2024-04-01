import { tasksSchema } from '@/actions/schemas/tasksSchema';
import { getUsers } from '@/data-access/users/getUsers';
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

export interface IModalProvider {
  AddChatModal: () => React.ReactNode;
  AddTaskModal: () => React.ReactNode;
}

type ResolvedType<T> = T extends Promise<infer R> ? R : T;
export type GetUsersReturnType = ResolvedType<ReturnType<typeof getUsers>>;
