import { useSearchParams } from 'next/navigation';

const useLimitSearchParams = () => {
  const searchParams = useSearchParams();
  const limit = searchParams.get('limit');
  return limit;
};

export default useLimitSearchParams;
