'use client';
import useQueryString from '@/app/dashboard/hooks/useQueryString';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const PaginationButtonPanel = () => {
  const {
    pathname: currentPathname,
    router,
    createPagePaginationQueryString,
  } = useQueryString();

  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
        onClick={() =>
          router.push(
            `${currentPathname}?${createPagePaginationQueryString(
              'decrement'
            )}`,
            { scroll: false }
          )
        }
      >
        <ChevronsLeft size={16} />
      </Button>
      <Button
        onClick={() =>
          router.push(
            `${currentPathname}?${createPagePaginationQueryString(
              'decrement'
            )}`,
            { scroll: false }
          )
        }
        type="button"
        variant={'outline'}
        className="h-8 w-8 p-0 text-muted-foreground"
      >
        <ChevronLeft size={16} />
      </Button>
      <Button
        onClick={() =>
          router.push(
            `${currentPathname}?${createPagePaginationQueryString(
              'increment'
            )}`,
            { scroll: false }
          )
        }
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
