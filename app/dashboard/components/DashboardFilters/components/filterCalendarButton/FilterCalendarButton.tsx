import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
const { format } = require('date-fns');

const FilterCalendarDropdown = dynamic(
  () => import('../filterCalendarDropdown/FilterCalendarDropdown')
);

const FilterCalendarButton = () =>
  // { children }: { children?: React.ReactNode }
  {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [range, setRange] = useState<DateRange | undefined>(undefined);

    const handleSelect = () => {
      setDropdownOpen((prev) => !prev);
    };

    let text = !range
      ? 'Pick a date'
      : `${range.from ? format(range.from, 'MMM dd') : ''} - ${
          range.to ? format(range.to, 'MMM dd') : ''
        }`;

    return (
      <div className="relative">
        <Button
          type="button"
          variant="outline"
          className="h-8"
          onClick={handleSelect}
        >
          <Calendar size={16} />
          <span className="ml-[6px]">{text}</span>
        </Button>
        {dropdownOpen && (
          <FilterCalendarDropdown range={range} setRange={setRange} />
        )}
      </div>
    );
  };

export default FilterCalendarButton;
