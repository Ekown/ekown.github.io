import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Home"));

const Home = () => (
    <Suspense fallback={null}>
        <LazyHome />
    </Suspense>
);

export default Home;
