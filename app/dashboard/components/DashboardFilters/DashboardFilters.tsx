import AddTaskButton from './components/addTaskButton/AddTaskButton';
import FilterButton from './components/filterButton';
import FilterCalendarButton from './components/filterCalendarButton/FilterCalendarButton';
import FilterInput from './components/filterInput/FilterInput';
import FilterResetButton from './components/filterResetButton/FilterResetButton';
import FilterViewButtonDropdown from './components/filterViewButtonDropdown';

const DashboardFilters = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex  gap-2">
        <FilterInput />
        <FilterButton category="status" />
        <FilterButton category="priority" />
        <FilterCalendarButton />
        <FilterResetButton />
      </div>
      <div className="flex items-center justify-center gap-2">
        <AddTaskButton />
        <FilterViewButtonDropdown />
      </div>
    </section>
  );
};

export default DashboardFilters;
