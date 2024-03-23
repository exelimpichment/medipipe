'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import useArrayFromSearchParams from '@/app/dashboard/hooks/useArrayFromSearchParams';
import TableBodyRow from './TableBodyRow';

const TableBody = () => {
  const keyValueArray = useArrayFromSearchParams();

  const { status, data, error } = useGetTasks(keyValueArray);

  if (!data) return <h1>loading ...</h1>;
  if (error) return <h1>error ...</h1>;

  return (
    <tbody className="">
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
