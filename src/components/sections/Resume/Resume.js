import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Resume.module.scss';

const Resume = () => {
  const [triggerTitle, setTriggerTitle] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.title = 'Eron Tancioco | Resume';

      setTriggerTitle(true);
    }
  }, [inView]);

  return (
    <section>
      <div className={ style.resume } name="Resume" ref={ref}>
        <div className="row">
          <div className="col-12">
            <h2 className="sub-text">Grab a copy of my Résumé</h2>
            <div className="button">
              <a className="ghost-button" href="https://drive.google.com/file/d/1xCAwG-dP1UN91C--NvcDqwwsM9IpDLn2/view?usp=share_link" target="_blank">Get a copy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
