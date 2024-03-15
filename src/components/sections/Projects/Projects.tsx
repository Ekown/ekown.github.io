import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./Projects.module.scss";
import Title from "../../common/atoms/Title/Title";
import ProjectCard from "../../common/molecules/ProjectCard/ProjectCard";
import projects from "../../../core/constants/projects";
import { Project } from "../../../core/interfaces/projects";
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const Projects = () => {
    const [triggerTitle, setTriggerTitle] = useState(false);
    const [shownProjects, setShownProjects] = useState(projects);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.title = "Eron Tancioco | Projects";

            setTriggerTitle(true);
        }
    }, [inView]);

    /**
     * Handle filter button clicks
     */
    const handleFilterClick = () => {
        // We need to clear the shown projects so that the animations will reset
        setShownProjects([]);
    };

    return (
        <section>
            <div className={style.projects + " container"} ref={ref}>
                <Title content="projects" inView={triggerTitle} />

                <ProjectFilters handleFilterClick={handleFilterClick} setShownProjects={setShownProjects} />

                <div className="row" data-testid="project-cards">
                    {shownProjects.length !== 0
                        ? shownProjects.map((project: Project, intKey: number) => {
                              return <ProjectCard key={"project-" + intKey} project={project} />;
                          })
                        : "No project with the selected filter..."}
                </div>
            </div>
        </section>
    );
};

export default Projects;
