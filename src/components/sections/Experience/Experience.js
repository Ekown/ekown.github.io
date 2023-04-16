import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skills from '../../common/molecules/Skills/Skills';
import styles from './Experience.module.scss';
import Title from '../../common/atoms/Title/Title';

const Experience = () => {
  const [triggerTitle, setTriggerTitle] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.title = 'Eron Tancioco | Experience';

      setTriggerTitle(true);
    }
  }, [inView]);

  return (
    <section>
      <div className={ styles.experience + ' container' } name="experience" ref={ref}>
        <Title content="experience" inView={triggerTitle} />
        <div className="content">
          <div>
            Here are some of the technologies that I've worked with for the past n years.
          </div>
          <Skills />
        </div> 
      </div>
    </section>
  );
}

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
