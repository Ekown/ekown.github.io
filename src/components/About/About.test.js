import React from 'react';
import About from './About';
import { render, cleanup, waitFor } from '@testing-library/react';

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (
    <React.Suspense fallback="loading">
      <About />
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getByText } = render(component);

  const lazyElement = await waitFor(() => getByText(/About/i));

  expect(lazyElement).toBeInTheDocument();
});