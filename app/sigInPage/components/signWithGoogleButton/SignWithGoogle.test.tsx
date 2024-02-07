import { fireEvent, render, screen } from '@testing-library/react';
import SignWithGoogle from './SignWithGoogleButton';

describe('SignWithGoogle', () => {
  test('button renders without props', () => {
    render(<SignWithGoogle />);

    const button = screen.getByRole('button', { name: /sign up with google/i });

    expect(button).toBeInTheDocument();
  });

  test('button renders disabled', () => {
    render(<SignWithGoogle isLoading={true} />);

    const button = screen.getByRole('button', {
      name: /sign up with google/i,
    });

    expect(button).toBeDisabled();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<SignWithGoogle isLoading={false} onClick={handleClick} />);

    const button = screen.getByRole('button', {
      name: /sign up with google/i,
    });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
