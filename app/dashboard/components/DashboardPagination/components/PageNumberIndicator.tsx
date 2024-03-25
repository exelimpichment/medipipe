'use client';

import useGetTasks from '@/app/common/tanstackHooks/useGetTasks';
import useValidateLimitSearchParams from '@/app/dashboard/hooks/useValidateLimitSearchParams';
import useValidatePageParams from '@/app/dashboard/hooks/useValidatePageParams';

const PageNumberIndicator = () => {
  const page = useValidatePageParams();
  const { data, error, isPending } = useGetTasks();
  const limit = useValidateLimitSearchParams();

  if (isPending || error)
    return (
      <div className="">
        <p>1 / 1 </p>
      </div>
    );

  return (
    <div className="">
      <p>{`Page ${page} of ${
        Math.ceil(data?.tasksCount / Number(limit)) ?? 0
      }`}</p>
    </div>
  );
};

export default PageNumberIndicator;
