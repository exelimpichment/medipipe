import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUp, Timer } from 'lucide-react';
import { TableBodyRowDropdown } from './TableBodyRowDropdown';

const TableBodyRow = () => {
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
        <Timer size={16} className="text-muted-foreground" />
        <span>In Progress</span>
      </td>
      <td className="flex w-24 items-center justify-start gap-1">
        <ArrowUp size={16} className="text-muted-foreground" />
        <span>High</span>
        {/* <ArrowRight size={16} /> */}
        {/* <ArrowDown size={16} /> */}
      </td>
      <td className="w-12">
        <TableBodyRowDropdown />
      </td>
    </tr>
  );
};

export default TableBodyRow;
