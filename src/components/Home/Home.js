import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import style from './Home.module.scss';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const Snow = lazy(() => import('../Snow/Snow'));
  const objTypewriterConfig = {
    strings: ['full-stack web developer.', 'software engineer.', 'forever learner.', 'tech enthusiast.'],
    autoStart: true,
    loop: true,
    wrapperClassName: 'typewrite', // @TODO: We can use the wrapper as the selector when the :has() selector has been fully implemented in most browsers (https://caniuse.com/css-has)
  };

  // @TODO: Add support for Bootstrap styling in React
  return (
    <div className={style.home}>
      <div className="snowfield">
        <Snow />
      </div>


      <div className="content">
        <div className="text px-4 px-sm-1">
          Hi, I'm <span className="name">Eron Tancioco</span>.<br />I'm a <Typewriter options={objTypewriterConfig} />
        </div>
        <div className="button">
          <a href="#about" className="bttn-dark smooth-scroll">See More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
