import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import style from "./Resume.module.scss";

const Resume = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.title = "Eron Tancioco | Resume";
        }
    }, [inView]);

    return (
        <section>
            <div className={style.resume} ref={ref}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="sub-text">Grab a copy of my Résumé</h2>
                        <div className="button">
                            <a
                                className="ghost-button"
                                href="https://drive.google.com/file/d/1hZzv0IOtpmuOUJXJ4RrpDirVVFjXxJt3/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Get a copy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
