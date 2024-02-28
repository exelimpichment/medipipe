'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useCalendarSearchParams from '../../hooks/useValidateCalendarParamsUrl';
import { getCalendarButtonText } from '../../utils/getCalendarButtonText';

const FilterCalendarDropdown = dynamic(
  () => import('../filterCalendarDropdown/FilterCalendarDropdown')
);

const FilterCalendarButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { from, to } = useCalendarSearchParams();

  const handleSelect = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <Button
        type="button"
        variant="outline"
        className="h-8"
        onClick={handleSelect}
      >
        <Calendar size={16} />
        <span className="ml-[6px]">{getCalendarButtonText(from, to)}</span>
      </Button>
      {dropdownOpen && <FilterCalendarDropdown />}
    </div>
  );
};

export default FilterCalendarButton;
