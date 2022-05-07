import React from "react";
import cx from "classnames";
import styles from "./HomeTopSecond.module.scss";

function HomeTopSecond() {
  return (
    <>
      <div className={cx(styles.wrapper)}>
        <div className={cx(styles.Imagebox)}>
          <img
            className={cx(styles.homeBoxImage)}
            src="/Images/Group 4345.png"
            alt="How-it-works"
          />
        </div>
        <p className={cx(styles.homesecondp)}>
          Over 32k+ software businesses growing with AR Shakir.
        </p>
        <div className={cx(styles.homeLogo)}>
          <img src="/Images/Logos.png" alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default HomeTopSecond;
