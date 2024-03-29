import { render, screen } from '@testing-library/react';
import RegisterFirst from './page';

describe('RegisterFirst', () => {
  test('registerFirst heading renders', () => {
    render(<RegisterFirst />);

    const heading = screen.getByRole('heading', { name: /oops/i });

    expect(heading).toBeInTheDocument();
  });

  test('registerFirst paragraph renders', () => {
    render(<RegisterFirst />);

    const paragraph = screen.getByText(
      /please create your account with the google provider first to use a magic link in the future\./i
    );

    expect(paragraph).toBeInTheDocument();
  });

  test('registerFirst redirect link renders', () => {
    render(<RegisterFirst />);

    const link = screen.getByRole('link', {
      name: /back to register page/i,
    });

    expect(link).toBeInTheDocument();
  });
});
