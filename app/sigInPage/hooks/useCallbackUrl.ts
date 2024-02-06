import { useSearchParams } from 'next/navigation';

const useCallbackUrl = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/dashboard';

  return callbackUrl;
};

export default useCallbackUrl;
