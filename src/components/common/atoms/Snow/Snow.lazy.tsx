import { lazy, Suspense } from "react";

const LazySnow = lazy(() => import("./Snow"));

const Snow = () => (
    <Suspense fallback={null}>
        <LazySnow />
    </Suspense>
);

export default Snow;
