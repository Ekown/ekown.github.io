import React, { lazy } from 'react';
import styles from './Experience.module.scss';
import html from '../../../../assets/logo/html.png';
import css from '../../../../assets/logo/css.png';
import js from '../../../../assets/logo/js.png';
import php from '../../../../assets/logo/php.png';
import typescript from '../../../../assets/logo/typescript.png';
import mysql from '../../../../assets/logo/mysql.png';
import { Image } from 'react-bootstrap';

const Experience = () => {
  return (
    <div className={styles.experience + ' container mt-4'}>
      <div className="row">
        <div className="col-12 tech-content mt-4">
          <div className="row skill">
            <div className="col-12">
              <h3 className="row skill__label">Programming Languages</h3>
              <div className="row skill__logos">
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={html} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={css} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={js} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={php} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={typescript} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={mysql} fluid={true} className="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
