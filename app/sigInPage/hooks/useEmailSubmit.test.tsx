import { act, renderHook } from '@testing-library/react';
import useEmailSubmit from './useEmailSubmit';

jest.mock('sonner', () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('useEmailSubmit', () => {
  test('should update email state', () => {
    const { result } = renderHook(() => useEmailSubmit());

    act(() => {
      result.current.setEmail('test@example.com');
    });

    expect(result.current.email).toBe('test@example.com');
  });

  test('should display error toast when invalid email is provided', () => {
    const { result } = renderHook(() => useEmailSubmit());

    act(() => {
      result.current.setEmail('incorrect email');
    });
    act(() => {
      result.current.signInWithEmail();
    });

    expect(require('sonner').toast.error).toHaveBeenCalledWith(
      'Please enter valid email address'
    );
    expect(result.current.isLoading).toBe(false);
  });

  test('should trigger verification with email logic', () => {
    const { result } = renderHook(() => useEmailSubmit());

    act(() => {
      result.current.setEmail('test@example.com');
    });
    act(() => {
      result.current.signInWithEmail();
    });

    expect(require('next-auth/react').signIn).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(true);
  });
});
