import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Skills from "../../common/molecules/Skills/Skills";
import styles from "./Experience.module.scss";
import Title from "../../common/atoms/Title/Title";
import { Element } from "react-scroll";

const Experience = () => {
    const [triggerTitle, setTriggerTitle] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    const workingYears = new Date().getFullYear() - 2018;

    useEffect(() => {
        if (inView) {
            document.title = "Eron Tancioco | Experience";

            setTriggerTitle(true);
        }
    }, [inView]);

    return (
        <Element name="experience">
            <section>
                <div className={styles.experience + " container"} ref={ref}>
                    <Title content="experience" inView={triggerTitle} />
                    <div className="content">
                        <div>
                            Here are some of the technologies that I've worked with for the past{" "}
                            {workingYears} years.
                        </div>
                        <Skills />
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Experience;
