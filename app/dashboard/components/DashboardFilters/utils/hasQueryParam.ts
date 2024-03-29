import { ReadonlyURLSearchParams } from 'next/navigation';

export const hasQueryParam = (searchParams: ReadonlyURLSearchParams) => {
  const paramsObject = Object.fromEntries(Array.from(searchParams.entries()));

  const hasQueryParam = Object.values(paramsObject).some(
    (value) => value !== ''
  );

  return hasQueryParam;
};
