import React, { lazy, Suspense } from "react";

const LazyProjectFilters = lazy(() => import("./ProjectFilters"));

const ProjectFilters = (props) => (
    <Suspense fallback={null}>
        <LazyProjectFilters {...props} />
    </Suspense>
);

export default ProjectFilters;
