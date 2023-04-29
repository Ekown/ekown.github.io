import React from 'react';
import CustomCarousel from './CustomCarousel';
import { render, cleanup, waitFor } from '@testing-library/react';

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (props) => (
    <React.Suspense fallback="loading">
      <CustomCarousel {...props} />
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getByTestId } = render(component({
    images: ['1.jpg'],
  }));

  const lazyElement = await waitFor(() => getByTestId('custom-carousel'));

  expect(lazyElement).toBeInTheDocument();
});