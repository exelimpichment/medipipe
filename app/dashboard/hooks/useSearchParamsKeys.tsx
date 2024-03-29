import { TasksSchemaType } from '@/types';
import { useSearchParams } from 'next/navigation';

const useSearchParamsKeys = () => {
  const searchParams = useSearchParams();

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

  return searchParamsKeys as TasksSchemaType;
};

export default useSearchParamsKeys;
