import FilterButton from './components/filterButton/FilterButton';
import {
  priories,
  statuses,
} from './components/filterButtonDropdown/utils/FilterButtonDropdownArr';
import FilterCalendarButton from './components/filterCalendarButton/FilterCalendarButton';
import FilterInput from './components/filterInput/FilterInput';

import FilterViewButtonDropdown from './components/filterViewButtonDropdown';

const DashboardFilters = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex  gap-2">
        <FilterInput />
        <FilterButton
          category="status"
          dropdownContent={statuses}
        ></FilterButton>
        <FilterButton
          category="priority"
          dropdownContent={priories}
        ></FilterButton>
        <FilterCalendarButton />
      </div>

      <FilterViewButtonDropdown />
    </section>
  );
};

export default DashboardFilters;
