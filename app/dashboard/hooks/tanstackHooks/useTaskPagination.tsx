import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useGetTasks from './useGetTasks';

const useTaskPagination = () => {
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
      params.set('page', '2');
      params.set('prevPage', '1');
    }

    if (page !== null) {
      params.set('prevPage', String(Number(page)));
      params.set('page', String(Number(page) + 1));
    }
    return params.toString();
  };
  return { router, handlePrevPageClick, pathname, handleNextPageClick };
};

export default useTaskPagination;
