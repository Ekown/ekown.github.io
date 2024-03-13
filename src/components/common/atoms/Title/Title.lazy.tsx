import { lazy, Suspense } from "react";

const LazyTitle = lazy(() => import("./Title"));

const Title = (props: any) => (
    <Suspense fallback={null}>
        <LazyTitle {...props} />
    </Suspense>
);

export default Title;
