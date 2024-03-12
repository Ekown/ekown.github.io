import React, { lazy, Suspense } from "react";

const LazySnow = lazy(() => import("./Snow"));

const Snow = (props) => (
    <Suspense fallback={null}>
        <LazySnow {...props} />
    </Suspense>
);

export default Snow;
