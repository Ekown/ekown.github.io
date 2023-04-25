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

  PROJECTS.map((objProjects, intKey) => (
    arProjects.push(
      <div className="project-card col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4" key={'project-' + intKey} >
        <div>
          <div className="project-img" style={{
            background: `url(${objProjects.photos[0]}) center center/cover`
          }}></div>
          <div className="card-text overlay">
            <div><strong>{objProjects.name}</strong></div>
            <span>{objProjects.stack.join(' / ')}</span>
          </div>
          <div className="card-button overlay">SEE MORE</div>
        </div>
      </div>
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
