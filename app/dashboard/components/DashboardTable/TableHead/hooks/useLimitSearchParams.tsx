import { useSearchParams } from 'next/navigation';

const useOrderSearchParams = () => {
  const searchParams = useSearchParams();
  const order = searchParams.get('order');
  return order;
};

export default useOrderSearchParams;
