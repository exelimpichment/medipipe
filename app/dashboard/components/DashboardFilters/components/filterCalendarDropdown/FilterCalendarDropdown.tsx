import useQueryString from '@/app/dashboard/hooks/useQueryString';
import { Calendar } from '@/components/ui/calendar';
import useCalendarSearchParams from './hooks/useCalendarSearchParams';
import { getDateRangeObject } from './utils/getDateRangeObject';

const FilterCalendarDropdown = () => {
  const {
    createDateQueryString,
    pathname: currentPathname,
    router,
  } = useQueryString();

  const { from, to } = useCalendarSearchParams();

  return (
    <div className="absolute left-0 mt-2 bg-popover">
      <Calendar
        defaultMonth={new Date()}
        mode="range"
        selected={getDateRangeObject({ from, to })}
        className="rounded-md border"
        onSelect={(calendarEvent) =>
          router.push(
            `${currentPathname}?${createDateQueryString(calendarEvent)}`
          )
        }
      />
    </div>
  );
};

export default FilterCalendarDropdown;
