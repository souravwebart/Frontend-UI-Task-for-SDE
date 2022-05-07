import React from "react";
import cx from "classnames";
import styles from "./HomeTopThird.module.scss";

function HomeTopThird() {
  return (
    <>
      <div className={cx(styles.homethird)}>
        <div className="container">
          <div className={cx(styles.homethirdbody)}>
            <div className={cx(styles.homethirdbodyImg)}>
              <img src="/images/Illustration.png" alt="Illustration" />
            </div>
            <div className={cx(styles.homeTopThirdContent)}>
              <h3>Our Feature</h3>
              <h2>
                All of your portfolios are linked to your AR Shakir account
              </h2>
              <p>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={cx(styles.homethirdbody)}>
            <div className={cx(styles.homeTopThirdContentSecond)}>
              <h3>Our Feature</h3>
              <h2>All payments can be managed from one account</h2>
              <p>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </p>
              <button>Get Started</button>
            </div>
            <div className={cx(styles.homethirdbodyImg2)}>
              <img src="/images/Group 4351.png" alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTopThird;
