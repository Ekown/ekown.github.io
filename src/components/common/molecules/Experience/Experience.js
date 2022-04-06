import React, { useState } from 'react';
import styles from './Experience.module.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { SKILL_LEVELS } from '../../../../core/constants/skill-levels';
import { SKILLS } from '../../../../core/enums/skills';
import { generateVariant } from '../../../../core/helpers/utils';
import { useInView } from 'react-intersection-observer';
import { useInterval } from '../../../../core/hooks/use-interval';

const Experience = () => {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  let arProgressBars = [];

  useInterval(() => {
    if (inView && progress < 100) {
      setProgress(progress => progress + 1);
    }
  }, 0);

  // Loop through all the defined skills to create the Progress Bars
  for (let prop in SKILLS) {
    let strSkill = SKILLS[prop];
    let intSkillLevel = SKILL_LEVELS[strSkill];

    if (typeof intSkillLevel === 'number') {
      intSkillLevel = intSkillLevel * progress;
      let objProgressBar = (
        <div className="row" key={prop}>
          <div className="col-2 progress-label">{strSkill}</div>
          <div className="col-10">
            <ProgressBar striped variant={generateVariant(intSkillLevel)} now={intSkillLevel} />
          </div>
        </div>
      );

      arProgressBars.push(objProgressBar);
    }
  }

  return (
    <div className={styles.experience + ' container'}>
      <div className="row">
        <div className="col-12 tech-content">
          <div className="row legend-row">
            <div className="col-4 legend-col"><span className="legend legend--b"></span><span className="legend-text"> - Beginner</span></div>
            <div className="col-4 legend-col"><span className="legend legend--i"></span><span className="legend-text"> - Intermediate</span></div>
            <div className="col-4 legend-col"><span className="legend legend--p"></span><span className="legend-text"> - Professional</span></div>
          </div>
          <div ref={ref}>
            {arProgressBars}
          </div>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
