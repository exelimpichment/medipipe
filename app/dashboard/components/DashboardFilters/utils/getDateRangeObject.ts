import { DateRange } from 'react-day-picker';

export const getDateRangeObject = ({
  from,
  to,
}: {
  from: string | null;
  to: string | null;
}): DateRange => {
  let newFrom: Date | undefined;
  let newTo: Date | undefined;

  if (from !== null && from !== '') {
    newFrom = new Date(from);
  }

  if (to !== null && to !== '') {
    newTo = new Date(to);
  }

  return {
    from: newFrom,
    to: newTo,
  };
};
