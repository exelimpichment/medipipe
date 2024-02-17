import { Calendar } from '@/components/ui/calendar';
import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

interface IFilterCalendarDropdown {
  range: DateRange | undefined;
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
}

const FilterCalendarDropdown: React.FC<IFilterCalendarDropdown> = ({
  range,
  setRange,
}) => {
  return (
    <div className="absolute left-0 mt-2 bg-popover">
      <Calendar
        defaultMonth={new Date()}
        mode="range"
        selected={range}
        className="rounded-md border"
        onSelect={(calendarEvent) => setRange(calendarEvent)}
      />
    </div>
  );
};

export default FilterCalendarDropdown;
