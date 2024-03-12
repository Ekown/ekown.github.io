import React from "react";
import styles from "./Snow.module.scss";

const Snow = () => [...Array(200)].map((x, i) => <div className={styles.snow} data-testid="snow-particle" key={"snow-particle" + i}></div>);

Snow.propTypes = {};

Snow.defaultProps = {};

export default Snow;
