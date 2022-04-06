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
            <p>
              Hi! My name is Eron and I'm a software engineer with a passion for improving old ideas and creating new exciting stuff.
              I'm currently working at <a href="https://www.crmonline.com.au/">CRM Online Australia</a> building solutions for the SugarCRM platform and implementing features for mobile applications built using Ionic.
            </p>
            <p>
              As a software engineer, I like bridging the gap between engineering and design, combining my technical expertise with my keen eye for aesthetics to produce a stunning product.
              My long-term objective is to constantly design scalable and efficient apps that provide engaging, pixel-perfect user experiences while handling user data with elegance performance-wise.
            </p>
            <p>
              When I'm not in front of a computer, I'm typically working out, watching Netflix, or crossing off another item on my bucket list.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
