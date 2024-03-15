import { useEffect, useState } from "react";
import style from "./ProjectFilters.module.scss";
import projects from "../../../../core/constants/projects";
import { ProjectFiltersProps } from "../../../../core/interfaces/props";

const FILTER_DATA = ["All", "Angular", "C#", "CRM", "React", "Ionic", "PHP"];

const ProjectFilters = ({ handleFilterClick, setShownProjects }: ProjectFiltersProps) => {
    const [filters, setFilters] = useState(["All"]);

    /**
     * Apply project stack filters based on the selected filters and update the displayed items.
     */
    useEffect(() => {
        function applyProjectStackFilters() {
            const newProjectsArray = projects.filter((project) => {
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
    }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

    /**
     * Set the selected filters for project stack filtering.
     *
     * @param {string} selectedFilter - The filter to be selected or deselected.
     */
    const setSelectedFilters = (selectedFilter: string) => {
        handleFilterClick();

        setFilters(() => {
            return [selectedFilter];
        });
    };

    return (
        <div className={style.projectfilters}>
            <div className="row mx-3">
                <div className="col-12">
                    {FILTER_DATA.map((stackFilter, intKey) => {
                        return (
                            <button
                                type="button"
                                className={
                                    "btn btn-outline-primary " +
                                    (filters.length !== 0 && filters.includes(stackFilter) ? "active" : "")
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
        </div>
    );
};

export default ProjectFilters;
