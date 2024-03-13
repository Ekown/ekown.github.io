import { lazy, Suspense } from "react";

const LazyProjects = lazy(() => import("./Projects"));

const Projects = () => (
    <Suspense fallback={null}>
        <LazyProjects />
    </Suspense>
);

export default Projects;
