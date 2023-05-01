import React from 'react';
import Resume from './Resume';
import { render, cleanup, waitFor } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (
    <React.Suspense fallback="loading">
      <Resume />
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getByText } = render(component);

  const lazyElement = await waitFor(() => getByText(/^Grab a copy of my Résumé$/i));

  expect(lazyElement).toBeInTheDocument();
});

test('it should render a "Grab a Copy" button', async() => {
  const { getByText } = render(component);

  const lazyElement = await waitFor(() => getByText(/^Get a copy$/i));

  expect(lazyElement).toBeInTheDocument();
});

test('it should have a "Grab a Copy" button that will open a link in new tab', async() => {
  const { getByText } = render(component);

  const lazyElement = await waitFor(() => getByText(/^Get a copy$/i));

  expect(lazyElement).toHaveAttribute('href', 'https://drive.google.com/file/d/1xCAwG-dP1UN91C--NvcDqwwsM9IpDLn2/view?usp=share_link');
  expect(lazyElement).toHaveAttribute('target', '_blank');
});

test('should change title', async () => {
  const { getByText } = render(component);

  const lazyElement = await waitFor(() => getByText(/^Grab a copy of my Résumé$/i));

  mockAllIsIntersecting(true);

  expect(lazyElement).toBeInTheDocument();
  expect(document.title).toBe('Eron Tancioco | Resume');
});