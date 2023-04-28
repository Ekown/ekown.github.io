import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  return (
    <div className={styles.projectcard + " col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4"}>
      <div>
        <div className="project-img" style={{
          background: `url(${props.photos[0]}) center center/cover`
        }}></div>
        <div className="card-text overlay">
          <div><strong>{props.name}</strong></div>
          <span>{props.stack.join(' / ')}</span>
        </div>
        <div className="card-button overlay">SEE MORE</div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default ProjectCard;
