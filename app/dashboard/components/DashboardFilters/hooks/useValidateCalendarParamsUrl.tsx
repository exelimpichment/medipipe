import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

const useValidateCalendarParamsUrl = () => {
  const searchParams = useSearchParams();

  const from = searchParams.get('from');
  const to = searchParams.get('to');

  const calendarSchema = z.object({
    from: z
      .string()
      .regex(/^(\d{4}-\d{2}-\d{2})?$/)
      .nullable(),
    to: z
      .string()
      .regex(/^(\d{4}-\d{2}-\d{2})?$/)
      .nullable(),
  });

  const result = calendarSchema.safeParse({ from, to });

  if (!result.success) {
    return { from: null, to: null };
  }

  return { from: result.data.from, to: result.data.to };
};

export default useValidateCalendarParamsUrl;
