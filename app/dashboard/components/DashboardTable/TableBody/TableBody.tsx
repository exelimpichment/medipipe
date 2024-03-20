'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import TableBodyRow from './TableBodyRow';

const TableBody = () => {
  const { status, data, error } = useGetTasks();

  return (
    <tbody className="">
      {data?.map((task) => <TableBodyRow key={task.id} />)}
    </tbody>
  );
};

export default TableBody;
