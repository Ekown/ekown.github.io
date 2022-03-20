import React from 'react';
import { useInView } from 'react-intersection-observer';
import Profile from '../Profile/Profile';
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
      {/*
        <div className="row">
          <div className="col-12 tech-content">
            <div className="row legend-row">
              <div className="col-4 legend-col"><span className="legend legend-b"></span><span className="legend-text"> - Beginner</span></div>
              <div className="col-4 legend-col"><span className="legend legend-i"></span><span className="legend-text"> - Intermediate</span></div>
              <div className="col-4 legend-col"><span className="legend legend-p"></span><span className="legend-text"> - Professional</span></div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">HTML</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="85%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">PHP</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="85%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">JS</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="80%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">MySQL</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="75%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">CSS</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="70%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">NodeJS</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="20%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">Zend</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="60%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">Angular</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="45%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 progress-label">Laravel</div>
              <div className="col-10">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuename="45%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div> 
    </div>
  );
}

About.propTypes = {};

About.defaultProps = {};

export default About;
