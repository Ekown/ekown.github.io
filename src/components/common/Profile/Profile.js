import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={ styles.profile + " row mt-md-4" }>
      <div className="col-8 offset-2 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5 offset-lg-0 col-xl-5 mt-4">
        <div className="picture"></div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 offset-lg-1 col-xl-6 text d-flex align-items-center">
        <div>
          <span>I was a Junior Software Engineer at </span>
          <a href="https://www.honcho.com.au" target="_blank" rel="noreferrer">Honcho</a>
          <span> in Pasay, Philippines. I have worked with different projects and technologies ranging from Zend to Angular. I handled both front-end and back-end tasks for the company. I have a thirst for knowledge and hunger for innovation. Let's make something new and exciting.</span>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
