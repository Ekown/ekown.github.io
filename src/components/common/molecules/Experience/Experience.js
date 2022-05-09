import React from 'react';
import styles from './Experience.module.scss';
import { Image } from 'react-bootstrap';
import { SKILLS } from '../../../../core/constants/skills';

const Experience = () => {
  const arSkillRows = [];

  SKILLS.map((objValue, intKey) => {
    arSkillRows.push(
      <div className="row skill" key={intKey}>
        <div className="col-12">
          <h3 className="row skill__label">{objValue.id}</h3>
          <div className="row skill__logos">
          {
            objValue.subskills.map((objSkill, intSubskillKey) => (
              <div className="col-3 col-sm-2 col-md-2 d-flex" key={intKey + intSubskillKey}>
                <Image src={objSkill} fluid={true} className="logo" />
              </div>
            ))
          }
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.experience + ' container mt-4'}>
      <div className="row">
        <div className="col-12 tech-content mt-4">{arSkillRows}</div>
      </div>
    </div>
  );
}

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
