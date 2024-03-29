import { lazy, Suspense } from "react";

const LazyCustomCarousel = lazy(() => import("./CustomCarousel"));

const CustomCarousel = (props: any) => (
    <Suspense fallback={null}>
        <LazyCustomCarousel {...props} />
    </Suspense>
);

export default CustomCarousel;
