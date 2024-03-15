import { lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("./About"));

const About = () => (
    <Suspense fallback={null}>
        <LazyAbout />
    </Suspense>
);

export default About;
