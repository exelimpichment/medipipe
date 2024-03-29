import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Circle,
  Clock2,
  LucideIcon,
  XCircle,
} from 'lucide-react';

export const generateIcon = (status: string, priority: string) => {
  const statusObj: { [key: string]: LucideIcon } = {
    Todo: Circle,
    'In Progress': Clock2,
    Done: CheckCircle2,
    Canceled: XCircle,
  };

  const priorityObj: { [key: string]: LucideIcon } = {
    Low: ArrowDown,
    Medium: ArrowLeft,
    High: ArrowUp,
  };

  const StatusIcon = statusObj[status];
  const PriorityIcon = priorityObj[priority];

  return { StatusIcon, PriorityIcon };
};
