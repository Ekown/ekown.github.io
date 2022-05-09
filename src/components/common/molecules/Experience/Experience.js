import React from 'react';
import styles from './Experience.module.scss';
import html from '../../../../assets/logo/html.png';
import css from '../../../../assets/logo/css.png';
import js from '../../../../assets/logo/js.png';
import php from '../../../../assets/logo/php.png';
import typescript from '../../../../assets/logo/typescript.png';
import mysql from '../../../../assets/logo/mysql.png';
import jquery from '../../../../assets/logo/jquery.png';
import sass from '../../../../assets/logo/sass.png';
import react from '../../../../assets/logo/react.png';
import laravel from '../../../../assets/logo/laravel.png';
import nodejs from '../../../../assets/logo/nodejs.png';
import angular from '../../../../assets/logo/angular.png';
import ionic from '../../../../assets/logo/ionic.png';
import git from '../../../../assets/logo/git.png';
import heroku from '../../../../assets/logo/heroku.png';
import docker from '../../../../assets/logo/docker.png';
import s3 from '../../../../assets/logo/s3.png';
import codepipeline from '../../../../assets/logo/codepipeline.png';
import cloudwatch from '../../../../assets/logo/cloudwatch.png';
import cognito from '../../../../assets/logo/cognito.png';
import { Image } from 'react-bootstrap';

// TODO: Add a way to store the logos in an array/object for maintainability
const Experience = () => {
  return (
    <div className={styles.experience + ' container mt-4'}>
      <div className="row">
        <div className="col-12 tech-content mt-4">
          <div className="row programming-languages">
            <div className="col-12">
              <h3 className="row programming-languages__label">Programming Languages</h3>
              <div className="row programming-languages__logos">
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
          <div className="row libraries-framework">
            <div className="col-12">
              <h3 className="row libraries-framework__label">Libraries & Frameworks</h3>
              <div className="row libraries-framework__logos">
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={jquery} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={sass} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={react} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={laravel} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={nodejs} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={angular} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={ionic} fluid={true} className="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="row tools-platforms">
            <div className="col-12">
              <h3 className="row libraries-framework__label">Tools & Platforms</h3>
              <div className="row libraries-framework__logos">
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={git} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={heroku} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={docker} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={s3} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={codepipeline} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={cloudwatch} fluid={true} className="logo" />
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex">
                  <Image src={cognito} fluid={true} className="logo" />
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
