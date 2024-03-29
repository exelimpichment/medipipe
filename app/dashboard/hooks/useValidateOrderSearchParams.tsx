import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

const useValidateOrderSearchParams = () => {
  const searchParams = useSearchParams();
  const order = searchParams.get('order');

  const orderSchema = z.literal('ascending').or(z.literal('descending'));

  const result = orderSchema.safeParse(order);

  if (!result.success) {
    return 'ascending';
  }

  return result.data;
};

export default useValidateOrderSearchParams;
