import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUp, Timer } from 'lucide-react';
import { useState } from 'react';
import { TableBodyRowDropdown } from './TableBodyRowDropdown';

const TableBodyRow = () => {
  type TStatus = 'Todo' | 'In Progress' | 'Done' | 'Canceled';
  type TPriority = 'High' | 'Medium' | 'Low';

  const statuses: TStatus[] = ['Todo', 'In Progress', 'Done', 'Canceled'];
  const priorities: TPriority[] = ['High', 'Medium', 'Low'];

  const [status, setStatus] = useState<TStatus>('In Progress');
  const [priority, setPriority] = useState<TPriority>('High');

  const handleStatusClick = () => {
    const currentIndex = statuses.indexOf(status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setStatus(statuses[nextIndex]);
  };
  const handlePriorityClick = () => {
    const currentIndex = priorities.indexOf(priority);
    const nextIndex = (currentIndex + 1) % priorities.length;
    setPriority(priorities[nextIndex]);
  };

  return (
    <tr className="flex h-12 border-collapse items-center border px-2 text-sm">
      <th scope="col" className="flex w-32 items-center space-x-2">
        <Checkbox id="task" />
        <label
          htmlFor="task"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          TASK-0001
        </label>
      </th>
      <td className="flex-1">
        You cant compress the program without quantifying the open-source
      </td>
      <td className="flex w-28 items-center justify-start gap-1">
        <Button
          variant="ghost"
          className="gap-1 p-1"
          onClick={handleStatusClick}
        >
          <Timer size={16} className="text-muted-foreground " />
          <span>{status}</span>
        </Button>
      </td>
      <td className="flex w-24 items-center justify-start gap-1">
        <Button
          variant="ghost"
          className="gap-1 p-1"
          onClick={handlePriorityClick}
        >
          <ArrowUp size={16} className="text-muted-foreground" />
          <span>{priority}</span>
        </Button>
      </td>
      <td className="w-12">
        <TableBodyRowDropdown />
      </td>
    </tr>
  );
};

export default TableBodyRow;
