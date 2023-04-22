import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Projects.module.scss';
import Title from '../../common/atoms/Title/Title';
import { PROJECTS } from '../../../core/constants/projects';
import { Stack } from 'react-bootstrap';

const Projects = () => {
  const [triggerTitle, setTriggerTitle] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const arProjects = [];

  PROJECTS.map((objProjects, intKey) => (
    arProjects.push(
      <div className="project-card" key={ 'project-' + intKey } style={{
        background: `url(${objProjects.photos[0]}) center center/cover`
      }} >
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
      <div className={ style.projects } name="Projects" ref={ref}>
        <Title content="projects" inView={triggerTitle} />
        <div className="row">
          <div className="col-12">
            <Stack>
            { arProjects }
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
