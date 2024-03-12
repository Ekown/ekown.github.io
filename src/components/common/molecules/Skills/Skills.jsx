import React from "react";
import styles from "./Skills.module.scss";
import { Image } from "react-bootstrap";
import { SKILLS } from "../../../../core/constants/skills";
import { WORKS } from "../../../../core/constants/works";

const Skills = () => {
    const arSkillRows = [],
        arWorkRows = [];

    SKILLS.map((objValue, intKey) =>
        arSkillRows.push(
            <div
                className={"col-12 " + (intKey !== 0 ? "col-lg-6" : "") + (intKey === 0 ? "mb-3" : "")}
                key={intKey}
            >
                <h3 className="row skill__label">{objValue.id}</h3>
                <div className="row skill__logos">
                    {objValue.subskills.map((objSkill, intSubskillKey) => (
                        <div
                            className={
                                "logo-col col-3 col-sm-2 col-md-2 d-flex " + (intKey !== 0 ? "col-lg-4" : "")
                            }
                            key={intKey + intSubskillKey}
                        >
                            <Image src={objSkill} fluid={true} className="logo" />
                        </div>
                    ))}
                </div>
            </div>
        )
    );

    WORKS.map((objValue, intKey) =>
        arWorkRows.push(
            <div className="row work" key={intKey}>
                <div className="col-12">
                    <h3 className="row work__label">{objValue.id}</h3>
                    <div className="row work__logos">
                        {objValue.employments.map((objSkill, intEmploymentKey) => (
                            <div
                                className="logo-col col-12 col-sm-12 col-md-3 col-lg-12 d-flex"
                                key={intKey + intEmploymentKey}
                            >
                                <a href={objValue.links[intEmploymentKey]} target="_new">
                                    <Image src={objSkill} fluid={true} className="logo" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div className={styles.skills + " container mt-4"}>
            <div className="row">
                <div className="col-12 col-lg-8 tech-content mt-3">
                    <div className="row skill">{arSkillRows}</div>
                </div>
                <div className="col-12 col-lg-4 work-content mt-3">{arWorkRows}</div>
            </div>
        </div>
    );
};

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
