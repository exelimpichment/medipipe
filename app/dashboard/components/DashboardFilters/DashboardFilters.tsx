import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
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
        <Suspense fallback={<Skeleton className="h-8 w-[182px]" />}>
          <FilterInput />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-8 w-[98.5px]" />}>
          <FilterButton category="status" />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-8 w-[104px]" />}>
          <FilterButton category="priority" />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-8 w-[128.5px]" />}>
          <FilterCalendarButton />
        </Suspense>
        <Suspense>
          <FilterResetButton />
        </Suspense>
      </div>

      <div className="flex items-center justify-center gap-2">
        <AddTaskButton />
        <FilterViewButtonDropdown />
      </div>
    </section>
  );
};

export default DashboardFilters;
