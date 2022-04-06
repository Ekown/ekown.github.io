import React from 'react';
import Title from './Title';
import { render, cleanup, waitFor } from '@testing-library/react';

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (strText) => (
    <React.Suspense fallback="loading">
      <Title content={strText}/>
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getByText } = render(component('test'));

  const lazyElement = await waitFor(() => getByText(/test/i));

  expect(lazyElement).toBeInTheDocument();
});