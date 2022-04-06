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
        <div className={ 'underline' + (inView ? ' underline-active' : '') }>
          <Title content="skills" />
        </div>
        <div className="content">
          <Experience />
        </div> 
      </div>
    </section>
  );
}

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
