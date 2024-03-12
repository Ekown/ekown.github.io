import React, { lazy, useEffect } from "react";
import style from "./Home.module.scss";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const Snow = lazy(() => import("../../common/atoms/Snow/Snow"));
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

    // Removes the focus from the button when clicked
    const handleClick = (evt) => {
        evt.target.blur();
    };

    return (
        <section>
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
                            <Link
                                className="ghost-button"
                                activeClass="active"
                                to="about"
                                spy={false}
                                hashSpy={false}
                                smooth={false}
                                isDynamic={true}
                                delay={0}
                                offset={0}
                                duration={700}
                                onClick={handleClick}
                            >
                                See More
                                <FontAwesomeIcon icon="arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;