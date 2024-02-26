import { useSearchParams } from 'next/navigation';

const useSearchSearchParams = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  return search;
};

export default useSearchSearchParams;
