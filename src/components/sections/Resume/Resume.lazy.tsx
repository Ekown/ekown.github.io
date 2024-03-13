import { lazy, Suspense } from "react";

const LazyResume = lazy(() => import("./Resume"));

const Resume = () => (
    <Suspense fallback={null}>
        <LazyResume />
    </Suspense>
);

export default Resume;
