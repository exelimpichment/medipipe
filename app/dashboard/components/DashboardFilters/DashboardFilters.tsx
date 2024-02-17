import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import FilterButton from './components/filterButton/FilterButton';
import FilterCalendarButton from './components/filterCalendarButton/FilterCalendarButton';
import FilterViewButtonDropdown from './components/filterViewButtonDropdown';

const DashboardFilters = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex  gap-2">
        <Input
          className="h-8 max-w-[250px] px-3 py-1"
          placeholder="Filter tasks..."
        />
        <FilterButton>
          <PlusCircle size={16} />
          <span className="pl-[6px]">Status</span>
        </FilterButton>
        <FilterButton>
          <PlusCircle size={16} />
          <span className="pl-[6px]">Priority</span>
        </FilterButton>
        <FilterCalendarButton></FilterCalendarButton>
      </div>

      <FilterViewButtonDropdown />
    </section>
  );
};

export default DashboardFilters;
