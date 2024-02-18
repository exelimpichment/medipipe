import { useSearchParams } from 'next/navigation';

const useCalendarSearchParams = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  return { from, to };
};

export default useCalendarSearchParams;
