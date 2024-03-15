import { lazy, Suspense } from "react";
import { ProjectFiltersProps } from "../../../../core/interfaces/props";

const LazyProjectFilters = lazy(() => import("./ProjectFilters"));

const ProjectFilters = (props: ProjectFiltersProps) => (
    <Suspense fallback={null}>
        <LazyProjectFilters {...props} />
    </Suspense>
);

export default ProjectFilters;
