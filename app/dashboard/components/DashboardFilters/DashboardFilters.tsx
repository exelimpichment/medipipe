import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
// import { Suspense } from 'react';

// import { Skeleton } from '@/components/ui/skeleton';
import FilterCalendarButton from './components/filterCalendarButton/FilterCalendarButton';
import FilterInput from './components/filterInput/FilterInput';
import FilterResetButton from './components/filterResetButton/FilterResetButton';
import FilterViewButtonDropdown from './components/filterViewButtonDropdown';

const DashboardFilters = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex  gap-2">
        {/* <Suspense fallback={<Skeleton className="h-8 w-[182px]" />}> */}
        <FilterInput />
        {/* </Suspense> */}
        {/* <Suspense>
          <FilterButton category="status" dropdownContent={statuses} />
        </Suspense> */}
        {/* <Suspense>
          <FilterButton category="priority" dropdownContent={priories} />
        </Suspense> */}
        {/* <Suspense fallback={<Skeleton className="h-8 w-[128.5px]" />}> */}
        <FilterCalendarButton />
        {/* </Suspense> */}
        {/* <Suspense fallback={<Skeleton className="h-8 w-[65.5px]" />}> */}
        <FilterResetButton />
        {/* </Suspense> */}
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
