import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={ styles.profile + " row mt-md-4" }>
      <div className="row">
        <div className="col-12 picture-row h-center mt-4">
          <div className="picture"></div>
        </div>
      </div>
      <div className="row">
        <div className="text d-flex align-items-center h-center">
          <div>
            <span>I was a Junior Software Engineer at </span>
            <a href="https://www.honcho.com.au" target="_blank" rel="noreferrer">Honcho</a>
            <span> in Pasay, Philippines. I have worked with different projects and technologies ranging from Zend to Angular. I handled both front-end and back-end tasks for the company. I have a thirst for knowledge and hunger for innovation. Let's make something new and exciting.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
