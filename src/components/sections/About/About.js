import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Profile from "../../common/molecules/Profile/Profile";
import styles from "./About.module.scss";
import Title from "../../common/atoms/Title/Title";

const About = () => {
    const [triggerTitle, setTriggerTitle] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.title = "Eron Tancioco | About";

            setTriggerTitle(true);
        }
    }, [inView]);

    return (
        <section>
            <div className={styles.about + " container"} name="about" ref={ref}>
                <Title content="about" inView={triggerTitle} />
                <div className="content">
                    <Profile />
                </div>
            </div>
        </section>
    );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
