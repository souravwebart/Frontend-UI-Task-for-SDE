import React from "react";
import cx from "classnames";
import styles from "./HomeTop.module.scss";

function HomeTop() {
  return (
    <>
      <div className={cx(styles.homebody)}>
        <div id="main-content" className={cx(styles.wrapper)}>
          <div className={cx(styles.hometopheadeing)}>
            <h1>Managing your crypto portfolio has never been easier</h1>
            <p>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div className={cx(styles.homeTopbutton)}>
            <button>Get Started</button>
            <div className={cx(styles.howItWorks)}>
              <img
                src="/Images/Group 176.png"
                alt="How-it-works"
                width={60}
                height={60}
              />
              <p>See How It Works</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTop;
