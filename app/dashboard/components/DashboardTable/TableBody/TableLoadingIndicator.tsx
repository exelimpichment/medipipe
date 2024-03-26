'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import { Loader } from 'lucide-react';

const TableLoadingIndicator = () => {
  const { isFetching } = useGetTasks();

  return (
    isFetching && (
      <div className="absolute right-2 top-2">
        <Loader className="animate-spin" />
      </div>
    )
  );
};

export default TableLoadingIndicator;
