import React, { lazy, Suspense } from "react";

const LazyProjectCard = lazy(() => import("./ProjectCard"));

const ProjectCard = (props) => (
    <Suspense fallback={null}>
        <LazyProjectCard {...props} />
    </Suspense>
);

export default ProjectCard;
