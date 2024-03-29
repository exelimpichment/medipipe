import 'server-only';

import { z } from 'zod';

export const tasksSchema = z.object({
  cursor: z.string().optional(),
  priority: z
    .literal('high')
    .or(z.literal('low'))
    .or(z.literal('medium'))
    .optional(),
  status: z
    .literal('in progress')
    .or(z.literal('todo'))
    .or(z.literal('done'))
    .or(z.literal('canceled'))
    .optional(),
  limit: z
    .literal('10')
    .or(z.literal('20'))
    .or(z.literal('30'))
    .or(z.literal('40'))
    .or(z.literal('50'))
    .or(z.literal('-10'))
    .or(z.literal('-20'))
    .or(z.literal('-30'))
    .or(z.literal('-40'))
    .or(z.literal('-50'))
    .optional(),
  search: z
    .string()
    .regex(/^[a-zA-Z0-9,.-]*$/, {
      message: 'A-Z, a-z, 0-9 are allowed only',
    })
    .optional(),
  from: z
    .string()
    .regex(/^(\d{4}-\d{2}-\d{2})?$/, {
      message: 'has to be of type YYYY-MM-DD',
    })
    .optional(),
  to: z
    .string()
    .regex(/^(\d{4}-\d{2}-\d{2})?$/, {
      message: 'has to be of type YYYY-MM-DD',
    })
    .optional(),
  order: z.literal('ascending').or(z.literal('descending')).optional(),
});
