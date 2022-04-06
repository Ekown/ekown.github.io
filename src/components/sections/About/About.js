import React from 'react';
import { useInView } from 'react-intersection-observer';
import Profile from '../../common/molecules/Profile/Profile';
import Experience from '../../common/molecules/Experience/Experience';
import styles from './About.module.scss';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className={ styles.about + ' container' } name="about" ref={ref}>
      <div className={ 'underline' + (inView ? ' underline-active' : '') }>
        <div className="title pt-3">ABOUT</div>
      </div>
      <div className="content">
        <Profile />
        <Experience />
      </div> 
    </div>
  );
}

About.propTypes = {};

About.defaultProps = {};

export default About;