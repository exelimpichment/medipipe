'use client';

import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Clock2,
  LucideIcon,
  XCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import TableBodyRowOptionsButtonDropdown from './TableBodyRowOptionsButtonDropdown';
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
      icon: CheckCircle2,
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

export type FilterButtonDropdownType = {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
};

export function TableBodyRowOptionsButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <Button variant="ghost" className="h-8 w-8 p-0" onClick={handleClick}>
        <MoreHorizontal size={16} />
      </Button>

      {dropdownOpen && <TableBodyRowOptionsButtonDropdown />}
    </div>
  );
}
