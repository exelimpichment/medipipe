import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useValidateFilterButtonUrl } from '../../hooks/useValidateFilterButtonParamsUrl';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { FilterButtonDropdownType } from '../../utils/filterButtonDropdownArr';

const FilterButtonDropdown = dynamic(
  () => import('../filterButtonDropdown/FilterButtonDropdown')
);

interface IFilterButton {
  category: 'status' | 'priority';
  dropdownContent: FilterButtonDropdownType[];
}

const FilterButton: React.FC<IFilterButton> = ({
  category,
  dropdownContent,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectedFilter = useValidateFilterButtonUrl(category);

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
          dropdownContent={dropdownContent}
          selectedFilter={selectedFilter}
        />
      )}
    </div>
  );
};

export default FilterButton;
