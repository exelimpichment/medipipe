'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import useValidateLimitSearchParams from '@/app/dashboard/hooks/useValidateLimitSearchParams';
import TableBodyRow from './TableBodyRow';
import TableBodyRowSkeleton from './TableBodyRowSkeleton';

const TableBody = () => {
  const limit = useValidateLimitSearchParams();

  const { data, error, isPending } = useGetTasks();

  if (isPending)
    return (
      <tbody>
        {Array(Number(limit))
          .fill(1)
          .map((item, index) => (
            <TableBodyRowSkeleton key={index} />
          ))}
      </tbody>
    );

  if (error)
    return (
      <tbody>
        <tr
          className={
            'bg-errorBgRed border-errorBorderRed flex h-[480px] w-full items-center justify-center border text-4xl'
          }
        >
          <td>Error...</td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {data.tasksList?.map(
        ({
          createdAt,
          description,
          id,
          priority: { priorityName },
          status: { statusName },
          title,
          user,
        }) => (
          <TableBodyRow
            key={id}
            taskId={id}
            priority={priorityName}
            status={statusName}
            title={title}
            userId={user.id}
            userName={user.name}
            description={description}
            createdAt={createdAt}
          />
        )
      )}
    </tbody>
  );
};

export default TableBody;
