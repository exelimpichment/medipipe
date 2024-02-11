import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FilterButtonDropdown = dynamic(
  () => import('../filterButtonDropdown/FilterButtonDropdown')
);

const FilterButton = ({ children }: { children: React.ReactNode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [, setSelectedStatus] = useState('');

  const handleSelect = () => {
    setDropdownOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <Button variant="dashed" className="h-8" onClick={handleSelect}>
        {children}
      </Button>
      {dropdownOpen && (
        <FilterButtonDropdown
          setDropdownOpen={setDropdownOpen}
          setSelectedStatus={setSelectedStatus}
        />
      )}
    </div>
  );
};

export default FilterButton;
