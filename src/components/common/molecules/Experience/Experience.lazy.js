import React, { lazy, Suspense } from 'react';

const LazyExperience = lazy(() => import('./Experience'));

const Experience = props => (
  <Suspense fallback={null}>
    <LazyExperience {...props} />
  </Suspense>
);

export default Experience;
