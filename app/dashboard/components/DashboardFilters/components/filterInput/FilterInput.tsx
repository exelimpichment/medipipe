'use client';
import useQueryString from '@/app/dashboard/hooks/useQueryString';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import { z } from 'zod';

const FilterInput = () => {
  const [showErrMsg, setShowErrMsg] = useState<Boolean>(false);
  const [input, setInput] = useState<string>('');

  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const searchValueRef = useRef<string>('');

  const {
    createQueryString,
    pathname: currentPathname,
    router,
    createQueryStringOnParamsDelete,
  } = useQueryString();

  const changeInput = (inputValue: string) => {
    const inputSchema = z.string().regex(/^[a-zA-Z0-9,.-]*$/);

    const result = inputSchema.safeParse(inputValue);

    if (!result.success) {
      setShowErrMsg(true);
      return;
    }
    setShowErrMsg(false);

    if (result.data.length === 0) {
      router.push(
        `${currentPathname}?${createQueryStringOnParamsDelete('search')}`
      );
      return;
    }
    router.push(
      `${currentPathname}?${createQueryString('search', result.data)}`
    );
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    searchValueRef.current = value;

    if (timerIdRef.current !== null) {
      clearTimeout(timerIdRef.current);
    }
    timerIdRef.current = setTimeout(() => {
      changeInput(searchValueRef.current);
      timerIdRef.current = null;
    }, 700);
  };

  return (
    <div className="relative">
      {showErrMsg && (
        <p className="absolute left-2 top-[-20px] text-xs text-red-600">
          A-Z, a-z, 0-9 are allowed only
        </p>
      )}

      <Input
        value={input}
        className="h-8 max-w-[250px] px-3 py-1"
        placeholder="Filter tasks..."
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
