import { useAppStore } from '@/app/store/StoreProvider';
import { TasksSchemaType } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';

const useSearchParamsKeys = () => {
  const searchParams = useSearchParams();
  const [dashboardCursor] = useAppStore(
    useShallow((state) => [state.dashboardCursor])
  );

  const keyValueArray = Array.from(searchParams.entries()).map(
    ([key, value]) => {
      return { [key]: value };
    }
  );
  const searchParamsKeys = keyValueArray.reduce((acc, obj) => {
    for (const key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});

  if (dashboardCursor)
    return {
      ...searchParamsKeys,
      cursor: String(dashboardCursor),
    } as TasksSchemaType;

  return searchParamsKeys as TasksSchemaType;
};

export default useSearchParamsKeys;
