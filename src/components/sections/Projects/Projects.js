import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Projects.module.scss';
import Title from '../../common/atoms/Title/Title';
import { PROJECTS } from '../../../core/constants/projects';
import ProjectCard from '../../common/molecules/ProjectCard/ProjectCard';

const Projects = () => {
  const [triggerTitle, setTriggerTitle] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const arProjects = [];

  PROJECTS.map((objProjects, intKey) => (
    arProjects.push(
      <ProjectCard key={'project-' + intKey} {...objProjects} />
    )
  ));

  useEffect(() => {
    if (inView) {
      document.title = 'Eron Tancioco | Projects';

      setTriggerTitle(true);
    }
  }, [inView]);

  return (
    <section>
      <div className={style.projects + ' container'} name="Projects" ref={ref}>
        <Title content="projects" inView={triggerTitle} />
        <div className="row">
          {arProjects}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
