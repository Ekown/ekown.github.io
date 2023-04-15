import React from 'react';
import Skills from './Skills';
import { render, cleanup, waitFor, getAllByText } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (
    <React.Suspense fallback="loading">
      <Skills />
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getAllByText } = render(component);

  const lazyElement = await waitFor(() => getAllByText(/Programming Languages|Libraries & Frameworks|Tools & Platforms|Work Experience/i));

  expect(lazyElement.length).toBeGreaterThanOrEqual(1);
});

// test('should have progressbars', async () => {
//   const { getAllByRole } = render(component);

//   const lazyElement = await waitFor(() => getAllByRole(/progressbar/i));

//   expect(lazyElement.length).toBeGreaterThan(0);
// });

// @TODO: Improve this test to accurately check for the progressbar attributes and to mock the skill level constants for better testing control
// test('should animate progressbars with values', async() => {
//   const { getAllByRole } = render(component);
  
//   mockAllIsIntersecting(true);

//   const lazyElement = await waitFor(() => getAllByRole(/progressbar/i));

//   lazyElement.forEach((progressBar) => {
//     expect(progressBar.getAttribute('aria-valuenow')).toBeTruthy();
//     expect(progressBar.getAttribute('style')).toBeTruthy();
//   });
// });