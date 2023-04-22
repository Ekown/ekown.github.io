import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Projects.module.scss';
import Title from '../../common/atoms/Title/Title';
import { PROJECTS } from '../../../core/constants/projects';

const Projects = () => {
  const [triggerTitle, setTriggerTitle] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const arProjects = [];

  PROJECTS.map((objProjects, intKey) => {
    arProjects.push(
      <div key={ 'project-' + intKey }>
        { objProjects.name }
      </div>
    );
  });

  useEffect(() => {
    if (inView) {
      document.title = 'Eron Tancioco | Projects';

      setTriggerTitle(true);
    }
  }, [inView]);

  return (
    <section>
      <div className={ style.projects } name="Projects" ref={ref}>
        <Title content="projects" inView={triggerTitle} />
        <div className="row">
          <div className="col-12">
            { arProjects }
          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
