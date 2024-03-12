import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import PageNumberIndicator from './PageNumberIndicator';
import PaginationButtonPanel from './PaginationButtonPanel';

const DashboardPaginationButtons = () => {
  return (
    <>
      <Suspense fallback={<Skeleton className="h-8 w-[87.5px]" />}>
        <PageNumberIndicator />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-8 w-[152px]" />}>
        <PaginationButtonPanel />
      </Suspense>
    </>
  );
};

export default DashboardPaginationButtons;
