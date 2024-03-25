'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import useArrayFromSearchParams from '@/app/dashboard/hooks/useSearchParamsKeys';
import { Loader } from 'lucide-react';

const TableLoadingIndicator = () => {
  const keyValueArray = useArrayFromSearchParams();
  const { isFetching } = useGetTasks(keyValueArray);

  return (
    isFetching && (
      <div className="absolute bottom-2 right-2">
        <Loader className="animate-spin" />
      </div>
    )
  );
};

export default TableLoadingIndicator;
