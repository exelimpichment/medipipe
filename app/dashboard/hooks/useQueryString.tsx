import { format } from 'date-fns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { DateRange } from 'react-day-picker';

const useQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const createDateQueryString = useCallback(
    (value: DateRange | undefined) => {
      const params = new URLSearchParams(searchParams);

      if (value === undefined) {
        params.set('to', '');
        params.set('from', '');
        return params.toString();
      }

      if (value.from) {
        params.set('from', format(value.from, 'yyyy-MM-dd'));
      }

      if (value.to) {
        params.set('to', format(value.to, 'yyyy-MM-dd'));
      }

      return params.toString();
    },
    [searchParams]
  );

  const createLimitQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set('limit', value);

      // if (value === undefined) {
      //   params.set('to', '');
      //   params.set('from', '');
      //   return params.toString();
      // }

      // if (value.from) {
      //   params.set('from', format(value.from, 'yyyy-MM-dd'));
      // }

      // if (value.to) {
      //   params.set('to', format(value.to, 'yyyy-MM-dd'));
      // }

      return params.toString();
    },
    [searchParams]
  );

  return {
    createQueryString,
    createDateQueryString,
    createLimitQueryString,
    pathname,
    router,
  };
};

export default useQueryString;
