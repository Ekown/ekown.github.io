import React from 'react';
import { useInView } from 'react-intersection-observer';
import Experience from '../../common/molecules/Experience/Experience';
import styles from './Skills.module.scss';
import Title from '../../common/atoms/Title/Title';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section>
      <div className={ styles.skills + ' container' } name="skills" ref={ref}>
        <Title content="skills" inView={inView} />
        <div className="content">
          <div>
            Here are some of the technologies that I've worked with for the past n years.
          </div>
          <Experience />
        </div> 
      </div>
    </section>
  );
}

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
