'use client';
import useGetTasks from '@/app/dashboard/hooks/tanstackHooks/useGetTasks';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PaginationButtonPanel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = searchParams.get('page');
  const take = searchParams.get('limit') ?? '10';
  const { data } = useGetTasks();

  const handlePrevPageClick = () => {
    const params = new URLSearchParams(searchParams);

    let path = pathname;

    if (page === null || page === '1') {
      return;
    }

    if (page !== null) {
      params.set('limit', String(-1 * Math.abs(Number(take))));
      params.set('prevPage', String(Number(page)));
      params.set('page', String(Number(page) - 1));

      path = pathname + '?' + params.toString();
    }

    return path;
  };

  const handleNextPageClick = () => {
    const params = new URLSearchParams(searchParams);

    const cursor = data?.tasksList[data?.tasksList.length - 1].id;

    params.set('cursor', String(cursor));

    if (Number(take) < 0) {
      params.set('limit', String(Math.abs(Number(take))));
    }

    if (page === null) {
      params.set('page', '1');
      params.set('prevPage', '1');
    }

    if (page !== null) {
      params.set('prevPage', String(Number(page)));
      params.set('page', String(Number(page) + 1));
    }
    return params.toString();
  };

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
