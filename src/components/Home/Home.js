import React, { lazy } from 'react';
import style from './Home.module.scss';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const Snow = lazy(() => import('../Snow/Snow'));
  const objTypewriterConfig = {
    strings: ['full-stack web developer.', 'software engineer.', 'forever learner.', 'tech enthusiast.'],
    autoStart: true,
    loop: true,
    wrapperClassName: 'typewrite', // @TODO: We can use the wrapper as the selector when the :has() selector has been fully implemented in most browsers (https://caniuse.com/css-has)
  };

  return (
    <div className={style.home}>
      <div className="snowfield">
        <Snow />
      </div>


      <div className="content col-12">
        <div className="text px-4 px-sm-1">
          Hi, I'm <span className="name">Eron Tancioco</span>.<br />I'm a <Typewriter options={objTypewriterConfig} />
        </div>
        <div className="button pt-1">
          <a href="#about" className="ghost-button smooth-scroll">See More<FontAwesomeIcon icon="arrow-right" /></a>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
