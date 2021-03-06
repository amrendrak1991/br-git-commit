import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page with about project test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple app/i);
  expect(linkElement).toBeInTheDocument();
});

//Jest configuration is giving weired error due to antd lib, need to spend more time for proper configuration