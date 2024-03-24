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

export type FilterButtonDropdownType = {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
};

export const dropdownContent = {
  priority: [
    {
      id: 0,
      icon: ArrowDown,
      value: 'low',
      label: 'Low',
    },
    {
      id: 1,
      icon: ArrowLeft,
      value: 'medium',
      label: 'Medium',
    },
    {
      id: 2,
      icon: ArrowUp,
      value: 'high',
      label: 'High',
    },
  ],
  status: [
    {
      id: 0,
      icon: Circle,
      value: 'todo',
      label: 'Todo',
    },
    {
      id: 1,
      icon: Clock2,
      value: 'in progress',
      label: 'In Progress',
    },
    {
      id: 2,
      icon: CheckCircle2,
      value: 'done',
      label: 'Done',
    },
    {
      id: 3,
      icon: XCircle,
      value: 'canceled',
      label: 'Canceled',
    },
  ],
};
