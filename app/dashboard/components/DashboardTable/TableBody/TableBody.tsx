'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import useSearchParamsKeys from '@/app/dashboard/hooks/useSearchParamsKeys';
import { useSearchParams } from 'next/navigation';
import TableBodyRow from './TableBodyRow';
import TableBodyRowSkeleton from './TableBodyRowSkeleton';

const TableBody = () => {
  const searchParams = useSearchParams();
  const limit = searchParams.get('limit') ?? 10;

  const searchParamsKeys = useSearchParamsKeys();

  const { data, error, isPending } = useGetTasks(searchParamsKeys);

  if (isPending)
    return (
      <tbody>
        {Array(limit)
          .fill(1)
          .map((item, index) => (
            <TableBodyRowSkeleton key={index} />
          ))}
      </tbody>
    );

  if (error)
    return (
      <tbody>
        <tr className="bg-errorBgRed border-errorBorderRed flex h-96 w-full items-center justify-center border text-4xl">
          <td>Error...</td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {data?.map(
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
