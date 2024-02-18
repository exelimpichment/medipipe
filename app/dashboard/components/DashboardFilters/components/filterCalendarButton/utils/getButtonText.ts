import { format } from 'date-fns';

export const getButtonText = (from: string | null, to: string | null) => {
  let text =
    !from && !to
      ? 'Pick a date'
      : `${from ? format(from, 'MMM dd') : ''} - ${
          to ? format(to, 'MMM dd') : ''
        }`;

  return text;
};
