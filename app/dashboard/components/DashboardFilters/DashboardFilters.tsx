import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import FilterButton from './components/filterButton/FilterButton';
import {
  priories,
  statuses,
} from './components/filterButtonDropdown/utils/FilterButtonDropdownArr';
import FilterCalendarButton from './components/filterCalendarButton/FilterCalendarButton';
import FilterInput from './components/filterInput/FilterInput';
import FilterResetButton from './components/filterResetButton/FilterResetButton';
import FilterViewButtonDropdown from './components/filterViewButtonDropdown';

const DashboardFilters = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex  gap-2">
        <FilterInput />
        <FilterButton category="status" dropdownContent={statuses} />
        <FilterButton category="priority" dropdownContent={priories} />
        <FilterCalendarButton />
        <FilterResetButton />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button className="h-[30px]  gap-1" type="button" variant="default">
          <Plus size={16} />
          <span className="">Add Task</span>
        </Button>
        <FilterViewButtonDropdown />
      </div>
    </section>
  );
};

export default DashboardFilters;
