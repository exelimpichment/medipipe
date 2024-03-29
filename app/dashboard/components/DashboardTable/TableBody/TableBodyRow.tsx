'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { TableBodyRowOptionsButton } from './TableBodyRowOptionsButton';
import { generateIcon } from './utils/generateIcon';

interface ITableBodyRowProps {
  taskId: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  userId: string;
  userName: string;
  createdAt: Date;
}

const TableBodyRow: React.FC<ITableBodyRowProps> = ({
  taskId,
  priority,
  createdAt,
  // description,
  status,
  title,
  // userId,
  // userName,
}) => {
  const { StatusIcon, PriorityIcon } = generateIcon(status, priority);

  return (
    <tr className="flex h-12 items-center border-b border-l border-r px-2 text-sm">
      <th scope="col" className="flex w-32 items-center space-x-2">
        <Checkbox id="task" />
        <label
          htmlFor="task"
          className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {`TASK-${taskId}`}
        </label>
      </th>
      <td className="flex flex-1 items-center justify-center gap-2 ">
        <div className="flex  rounded border px-2 py-[2px] text-xs">
          {format(createdAt, 'dd/MM HH:mm')}
        </div>
        <div className="flex-1">{title}</div>
      </td>
      <td className="flex w-28 items-center justify-start gap-1">
        <div className="flex items-center justify-center gap-[6px] p-1">
          <StatusIcon size={16} className="text-muted-foreground " />
          <span>{status}</span>
        </div>
      </td>
      <td className="flex w-24 items-center justify-start gap-1">
        <div className="flex items-center justify-center gap-[6px] p-1">
          <PriorityIcon size={16} className="text-muted-foreground" />
          <span>{priority}</span>
        </div>
      </td>
      <td className="w-12">
        <TableBodyRowOptionsButton taskId={taskId} />
      </td>
    </tr>
  );
};

export default TableBodyRow;
