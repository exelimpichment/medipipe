import { useSearchParams } from 'next/navigation';

const useArrayFromSearchParams = () => {
  const searchParams = useSearchParams();

  const keyValueArray = Array.from(searchParams.entries()).map(
    ([key, value]) => {
      return { [key]: value };
    }
  );
  return keyValueArray;
};

export default useArrayFromSearchParams;
