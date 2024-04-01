'use client';

import useGetTasks from '@/app/dashboard/hooks/tanstackHooks/useGetTasks';
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
            'flex h-[480px] w-full flex-col items-center justify-center border border-errorBorderRed bg-errorBgRed text-4xl'
          }
        >
          <td>Error...</td>
          <td className=" text-lg text-gray-500">Please, reload the page.</td>
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
