'use client';
import useQueryString from '@/app/dashboard/hooks/useQueryString';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { z } from 'zod';

const FilterInput = () => {
  const {
    createQueryString,
    pathname: currentPathname,
    router,
  } = useQueryString();

  const [showErrMsg, setShowErrMsg] = useState<Boolean>(false);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputSchema = z.string().regex(/^[a-zA-Z0-9,.-]*$/);

    const result = inputSchema.safeParse(event.target.value);

    if (!result.success) {
      setShowErrMsg(true);
      return;
    }
    setShowErrMsg(false);
    router.push(
      `${currentPathname}?${createQueryString('search', result.data)}`
    );
  };

  return (
    <div className="relative">
      {showErrMsg && (
        <p className="absolute left-2 top-[-20px] text-xs text-red-600">
          A-Z, a-z, 0-9 are allowed only
        </p>
      )}

      <Input
        value={search ?? ''}
        className="h-8 max-w-[250px] px-3 py-1"
        placeholder="Filter tasks..."
        onChange={(event) => onChangeHandler(event)}
      />
    </div>
  );
};

export default FilterInput;
