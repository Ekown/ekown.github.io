import React from 'react';
import { useInView } from 'react-intersection-observer';
import Profile from '../../common/molecules/Profile/Profile';
import styles from './About.module.scss';
import Title from '../../common/atoms/Title/Title';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section>
      <div className={styles.about + ' container'} name="about" ref={ref}>
        <div className={'underline' + (inView ? ' underline-active' : '')}>
          <Title content="about" />
        </div>
        <div className="content">
          <Profile />
        </div>
      </div>
    </section>
  );
}

About.propTypes = {};

About.defaultProps = {};

export default About;
