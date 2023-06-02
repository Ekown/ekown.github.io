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

test('it should render carousel controls when the images length > 1', async () => {
  const { getByTestId } = render(component({
    images: ['image1.jpg', 'image2.jpg'],
  }));

  const customCarousel = await waitFor(() => getByTestId('custom-carousel'));

  expect(customCarousel.getElementsByClassName('carousel-control-prev').length).toBe(1);
  expect(customCarousel.getElementsByClassName('carousel-control-next').length).toBe(1);
});

test('it should not render carousel controls when the images length = 1', async () => {
  const { getByTestId } = render(component({
    images: ['image1.jpg'],
  }));

  const customCarousel = await waitFor(() => getByTestId('custom-carousel'));

  expect(customCarousel.getElementsByClassName('carousel-control-prev').length).toBe(0);
  expect(customCarousel.getElementsByClassName('carousel-control-next').length).toBe(0);
});

test('it should not render carousel controls when the images length < 1', async () => {
  const { getByTestId } = render(component({
    images: [],
  }));

  const customCarousel = await waitFor(() => getByTestId('custom-carousel'));

  expect(customCarousel.getElementsByClassName('carousel-control-prev').length).toBe(0);
  expect(customCarousel.getElementsByClassName('carousel-control-next').length).toBe(0);
});