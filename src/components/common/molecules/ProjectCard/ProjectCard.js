import React, { useState } from 'react';
import styles from './ProjectCard.module.scss';
import CustomModal from '../CustomModal/CustomModal';

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalContent = {
    title: props.name,
    subtitle: props.type,
    body: props.description,
    images: props.photos,
    site: props.site !== '' ? props.site : false,
    source: props.source !== '' ? props.source : false,
  };

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
        <div className="card-button overlay" onClick={openModal}>SEE MORE</div>
      </div>
      <CustomModal isOpen={isOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default ProjectCard;
