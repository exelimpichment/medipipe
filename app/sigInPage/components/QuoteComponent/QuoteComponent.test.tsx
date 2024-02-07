import { render, screen } from '@testing-library/react';
import QuoteComponent from './QuoteComponent';

describe('Quote component', () => {
  test('renders Quote component', () => {
    render(<QuoteComponent />);

    const paragraph = screen.getByText(/eradicating/i);

    expect(paragraph).toBeInTheDocument();
  });
});
