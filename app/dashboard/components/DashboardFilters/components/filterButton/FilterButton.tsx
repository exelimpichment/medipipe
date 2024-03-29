'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { useValidateFilterButton } from '@/app/dashboard/hooks/useValidateFilterButtonParams';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

const FilterButtonDropdown = dynamic(
  () => import('../filterButtonDropdown/FilterButtonDropdown')
);

interface IFilterButton {
  category: 'status' | 'priority';
}

const FilterButton: React.FC<IFilterButton> = ({ category }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectedFilter = useValidateFilterButton(category);

  const handleSelect = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <Button
        type="button"
        variant="dashed"
        className="h-8"
        onClick={handleSelect}
      >
        <PlusCircle size={16} />
        <span className="pl-[6px]">{capitalizeFirstLetter(category)}</span>
        {selectedFilter && (
          <>
            <span className="translate-y-[-2px] px-1 text-xl font-thin text-muted-foreground">
              |
            </span>
            <span className="rounded-sm bg-secondary px-[3px] py-[1px] text-sm font-light text-secondary-foreground text-white">
              {capitalizeFirstLetter(selectedFilter)}
            </span>
          </>
        )}
      </Button>
      {dropdownOpen && (
        <FilterButtonDropdown
          setDropdownOpen={setDropdownOpen}
          category={category}
          selectedFilter={selectedFilter}
        />
      )}
    </div>
  );
};

export default FilterButton;
