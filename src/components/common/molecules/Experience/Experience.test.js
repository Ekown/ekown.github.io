import React from 'react';
import Experience from './Experience';
import { render, cleanup, waitFor } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (
    <React.Suspense fallback="loading">
      <Experience />
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getByText } = render(component);

  const lazyElement = await waitFor(() => getByText(/Beginner/i));

  expect(lazyElement).toBeInTheDocument();
});

test('should have progressbars', async () => {
  const { getAllByRole } = render(component);

  const lazyElement = await waitFor(() => getAllByRole(/progressbar/i));

  expect(lazyElement.length).toBeGreaterThan(0);
});

// @TODO: Improve this test to accurately check for the progressbar attributes and to mock the skill level constants for better testing control
test('should animate progressbars with values', async() => {
  const { getAllByRole } = render(component);
  
  mockAllIsIntersecting(true);

  const lazyElement = await waitFor(() => getAllByRole(/progressbar/i));

  lazyElement.forEach((progressBar) => {
    expect(progressBar.getAttribute('aria-valuenow')).toBeTruthy();
    expect(progressBar.getAttribute('style')).toBeTruthy();
  });
});