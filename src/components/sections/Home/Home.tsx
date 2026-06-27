import { lazy, useCallback, useEffect } from "react";
import style from "./Home.module.scss";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

const Snow = lazy(() => import("../../common/atoms/Snow/Snow"));

const Home = () => {
    const scrollToAbout = useCallback(() => {
        const el = document.getElementById("about");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const objTypewriterConfig = {
        strings: ["full-stack web developer.", "software engineer.", "forever learner.", "tech enthusiast."],
        autoStart: true,
        loop: true,
        wrapperClassName: "typewrite", // @TODO: We can use the wrapper as the selector when the :has() selector has been fully implemented in most browsers (https://caniuse.com/css-has)
    };

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.title = "Eron Tancioco | Welcome";
        }
    }, [inView]);

    return (
        <section id="home">
            <div className={style.home} ref={ref}>
                <div className="snowfield">
                    <Snow />
                </div>

                <div className="content container">
                    <div className="row">
                        <div className="text px-4 px-sm-1">
                            Hi, I'm <span className="name">Eron Tancioco</span>.<br />
                            I'm a <Typewriter options={objTypewriterConfig} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="button pt-1">
                            <button className="ghost-button" onClick={scrollToAbout} type="button">
                                See More
                                <FontAwesomeIcon icon="arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
