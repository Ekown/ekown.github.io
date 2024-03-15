import { lazy, Suspense } from "react";

const LazySkills = lazy(() => import("./Skills"));

const Skills = () => (
    <Suspense fallback={null}>
        <LazySkills />
    </Suspense>
);

export default Skills;
