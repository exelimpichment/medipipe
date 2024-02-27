import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

export const useValidateFilterButtonUrl = (category: 'status' | 'priority') => {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get(category);

  const filterButtonSchema = {
    priority: z
      .literal('high')
      .or(z.literal('low'))
      .or(z.literal('medium'))
      .nullable(),
    status: z
      .literal('todo')
      .or(z.literal('in progress'))
      .or(z.literal('done'))
      .or(z.literal('canceled'))
      .nullable(),
  };
  const result = filterButtonSchema[category].safeParse(selectedFilter);

  if (!result.success) {
    return null;
  }

  return result.data;
};
