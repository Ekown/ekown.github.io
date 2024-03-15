import { lazy, Suspense } from "react";

const LazyExperience = lazy(() => import("./Experience"));

const Experience = () => (
    <Suspense fallback={null}>
        <LazyExperience />
    </Suspense>
);

export default Experience;
