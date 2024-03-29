import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from './SignInForm';

describe('signIn form', () => {
  test('sigIn form renders', () => {
    render(<SignInForm />);

    const heading = screen.getByRole('heading', {
      name: /create an account/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test('paragraph renders', () => {
    render(<SignInForm />);

    const paragraph = screen.getByText(
      /enter your email below to create your account/i
    );

    expect(paragraph).toBeInTheDocument();
  });

  test('input functioning properly', () => {
    render(<SignInForm />);

    const emailInput = screen.getByRole('textbox');

    fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });

    expect(emailInput).toHaveValue('example@gmail.com');
  });

  test('administrator note renders', () => {
    render(<SignInForm />);

    const heading = screen.getByText(
      /upon administrator confirmation, your access will be granted\./i
    );

    expect(heading).toBeInTheDocument();
  });
});
