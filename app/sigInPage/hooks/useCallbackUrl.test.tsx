// useCallbackUrl.test.js
import { renderHook } from '@testing-library/react';
import useCallbackUrl from './useCallbackUrl';

jest.mock('next/navigation', () => {
  let callCount = 0;

  return {
    useSearchParams: jest.fn(() => {
      callCount++;
      if (callCount === 1) {
        const map = new Map();
        map.set('callbackUrl', '/dashboard-after-proper-redirection');
        return map;
      } else {
        return null;
      }
    }),
  };
});

describe('useCallbackUrl', () => {
  test('should return the callbackUrl when the search param is provided', () => {
    const { result } = renderHook(() => useCallbackUrl());

    expect(result.current).toBe('/dashboard-after-proper-redirection');
  });

  test('should return the default callbackUrl (/dashboard) when the search param is NOT provided', () => {
    const { result } = renderHook(() => useCallbackUrl());

    expect(result.current).toBe('/dashboard');
  });
});
