export type getTaskParam = {
  [key: string]: string | string[] | undefined;
};

export interface ITask {
  status: {
    statusName: string;
  };
  priority: {
    priorityName: string;
  };
  user: {
    id: string;
    name: string;
  };
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}
[];
