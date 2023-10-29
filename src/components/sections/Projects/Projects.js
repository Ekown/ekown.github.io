import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./Projects.module.scss";
import Title from "../../common/atoms/Title/Title";
import { PROJECTS } from "../../../core/constants/projects";
import ProjectCard from "../../common/molecules/ProjectCard/ProjectCard";

const Projects = () => {
    const [triggerTitle, setTriggerTitle] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    const arProjects = [],
        arStack = ["All", "Angular", "C#", "CRM", "React", "Ionic", "JavaScript", "Unity", "Zend"];

    PROJECTS.map((objProjects, intKey) =>
        arProjects.push(<ProjectCard key={"project-" + intKey} {...objProjects} />)
    );

    useEffect(() => {
        if (inView) {
            document.title = "Eron Tancioco | Projects";

            setTriggerTitle(true);
        }
    }, [inView]);

    const fetchFruits = async () => {
        try {
            const response = await fetch("https://fruityvice.com/api/fruit/all");

            const data = await response.json();

            console.log(response);

            // setFruits(data);
        } catch (error) {
            console.error("Error fetching fruits:", error);
        }
    };

    fetchFruits();

    return (
        <section>
            <div className={style.projects + " container"} name="Projects" ref={ref}>
                <Title content="projects" inView={triggerTitle} />
                <div className="row">{arStack}</div>
                <div className="row">{arProjects}</div>
            </div>
        </section>
    );
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
