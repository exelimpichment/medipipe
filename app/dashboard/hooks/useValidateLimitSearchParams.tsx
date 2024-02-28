import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

const useValidateLimitSearchParams = () => {
  const searchParams = useSearchParams();
  const limit = searchParams.get('limit');

  const limitSchema = z
    .literal('10')
    .or(z.literal('20'))
    .or(z.literal('30'))
    .or(z.literal('40'))
    .or(z.literal('50'));

  const result = limitSchema.safeParse(limit);

  if (!result.success) {
    return '10';
  }

  return result.data;
};

export default useValidateLimitSearchParams;
