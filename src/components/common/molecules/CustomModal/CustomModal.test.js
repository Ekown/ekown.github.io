import React from 'react';
import CustomModal from './CustomModal';
import { render, cleanup, waitFor } from '@testing-library/react';

afterEach(cleanup);

let component;

beforeEach(() => {
  component = (props) => (
    <React.Suspense fallback="loading">
      <CustomModal {...props} />
    </React.Suspense>
  );
});

test('should render properly', async () => {
  const { getByText } = render(component({
    isOpen: true,
    onClose: jest.fn(),
    content: {
      title: 'My test modal title',
      images: [],
    },
  }));

  const lazyElement = await waitFor(() => getByText(/My test modal title/i));

  expect(lazyElement).toBeInTheDocument();
});