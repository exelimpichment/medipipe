import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

const useValidatePageParams = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const pageNumberSchema = z.coerce.number();
  const result = pageNumberSchema.safeParse(page);

  if (!result.success || result.data === 0) {
    return '1';
  }

  return result.data;
};

export default useValidatePageParams;
