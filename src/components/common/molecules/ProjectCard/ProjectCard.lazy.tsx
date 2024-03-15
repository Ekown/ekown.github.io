import { lazy, Suspense } from "react";
import { ProjectCardProps } from "../../../../core/interfaces/props";

const LazyProjectCard = lazy(() => import("./ProjectCard"));

const ProjectCard = (props: ProjectCardProps) => (
    <Suspense fallback={null}>
        <LazyProjectCard {...props} />
    </Suspense>
);

export default ProjectCard;
