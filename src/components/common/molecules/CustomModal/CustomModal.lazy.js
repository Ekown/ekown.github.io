import React, { lazy, Suspense } from 'react';

const LazyCustomModal = lazy(() => import('./CustomModal'));

const CustomModal = props => (
  <Suspense fallback={null}>
    <LazyCustomModal {...props} />
  </Suspense>
);

export default CustomModal;
