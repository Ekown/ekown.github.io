import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./Projects.module.scss";
import Title from "../../common/atoms/Title/Title";
import ProjectCard from "../../common/molecules/ProjectCard/ProjectCard";
import projects from "../../../core/constants/projects";

const PROJECT_DATA = projects;
const FILTER_DATA = ["All", "Angular", "C#", "CRM", "React", "Ionic", "JavaScript", "Unity", "Zend"];

const Projects = () => {
    const [triggerTitle, setTriggerTitle] = useState(false);
    const [shownProjects, setShownProjects] = useState(PROJECT_DATA);
    const [filters, setFilters] = useState(["All"]);
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
     * Apply project stack filters based on the selected filters and update the displayed items.
     */
    useEffect(() => {
        function applyProjectStackFilters() {
            const newProjectsArray = PROJECT_DATA.filter((project) => {
                if (filters.includes("All")) {
                    return true;
                }

                // Check if the project stack includes the current filters
                return filters.every((filter) =>
                    project.stack.some((projectStack) => projectStack.includes(filter))
                );
            });

            setShownProjects(newProjectsArray);
        }

        applyProjectStackFilters();
    }, [filters]);

    /**
     * Set the selected filters for project stack filtering.
     *
     * @param {string} selectedFilter - The filter to be selected or deselected.
     */
    const setSelectedFilters = (selectedFilter) => {
        // We need to clear the shown projects so that the animations will reset
        setShownProjects([]);

        setFilters(() => {
            return [selectedFilter];
        });
    };

    return (
        <section>
            <div className={style.projects + " container"} name="Projects" ref={ref}>
                <Title content="projects" inView={triggerTitle} />

                <div className="row">
                    <div className="btn-group" role="group" aria-label="Filter Projects by Tech Stack">
                        {FILTER_DATA.map((stackFilter, intKey) => {
                            return (
                                <button
                                    type="button"
                                    className={
                                        "btn btn-outline-primary " +
                                        (filters.length !== 0 && filters.includes(stackFilter)
                                            ? "active"
                                            : "")
                                    }
                                    key={"project-filter-" + intKey}
                                    onClick={() => setSelectedFilters(stackFilter)}
                                >
                                    {stackFilter}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="row">
                    {shownProjects.length !== 0
                        ? shownProjects.map((project, intKey) => {
                              return <ProjectCard key={"project-" + intKey} {...project} />;
                          })
                        : "No project with the selected filter..."}
                </div>
            </div>
        </section>
    );
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
