import React, { lazy, Suspense } from 'react';

const LazyProjects = lazy(() => import('./Projects'));

const Projects = props => (
  <Suspense fallback={null}>
    <LazyProjects {...props} />
  </Suspense>
);

export default Projects;
