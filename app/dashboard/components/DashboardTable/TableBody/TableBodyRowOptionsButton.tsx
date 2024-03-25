'use client';

import { Button } from '@/components/ui/button';

import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import TableBodyRowOptionsButtonDropdown from './TableBodyRowOptionsButtonDropdown';

export function TableBodyRowOptionsButton({ taskId }: { taskId: number }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <Button variant="ghost" className="h-8 w-8 p-0" onClick={handleClick}>
        <MoreHorizontal size={16} />
      </Button>

      {dropdownOpen && (
        <TableBodyRowOptionsButtonDropdown
          taskId={taskId}
          setDropdownOpen={setDropdownOpen}
        />
      )}
    </div>
  );
}
