'use client';
import useTaskPagination from '@/app/dashboard/hooks/tanstackHooks/useTaskPagination';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const PaginationButtonPanel = () => {
  const { router, handlePrevPageClick, pathname, handleNextPageClick } =
    useTaskPagination();

  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
        onClick={() => {}}
      >
        <ChevronsLeft size={16} />
      </Button>
      <Button
        onClick={() => {
          router.push(handlePrevPageClick() ?? pathname, { scroll: false });
        }}
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronLeft size={16} />
      </Button>
      <Button
        onClick={() => {
          router.push(`${pathname}?${handleNextPageClick()}`, {
            scroll: false,
          });
        }}
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronRight size={16} />
      </Button>
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronsRight size={16} />
      </Button>
    </div>
  );
};

export default PaginationButtonPanel;
