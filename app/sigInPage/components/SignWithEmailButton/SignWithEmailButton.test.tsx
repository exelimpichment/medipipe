import { fireEvent, render, screen } from '@testing-library/react';
import SignWithEmailButton from './SignWithEmailButton';

describe('SignWithGoogle', () => {
  test('button renders without props', () => {
    render(<SignWithEmailButton />);

    const button = screen.getByRole('button', { name: /sign in with email/i });

    expect(button).toBeInTheDocument();
  });

  test('renders disabled button with loading spinner for Sign In with Email', () => {
    render(<SignWithEmailButton isLoading={true} />);

    const button = screen.getByRole('button', { name: /sign in with email/i });
    const spinner = screen.getByTestId('loading-spinner');

    expect(spinner).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<SignWithEmailButton isLoading={false} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /sign in with email/i });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
