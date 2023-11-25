import React from "react";
import styles from "./Title.module.scss";

const Title = (props) => {
    return (
        <div className={styles.title + " underline " + (props.inView ? " underline-active " : "")}>
            <h2 className="pt-3 mb-5">{props.content}</h2>
        </div>
    );
};

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
