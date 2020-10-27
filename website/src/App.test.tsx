import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react scroll-link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This will be my new personal website/i);
  expect(linkElement).toBeInTheDocument();
});
