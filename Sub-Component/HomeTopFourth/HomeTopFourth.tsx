import React from "react";
import cx from "classnames";
import styles from "./HomeTopFourth.module.scss";
import Data from "../../utils/data";

function HomeTopFourth() {
  return (
    <>
      <div className={cx(styles.HomeTopBodyFourth)}>
        <div className="container">
          <div className={cx(styles.homeTopBodyFourthTopContent)}>
            <h2>
              Yet preference connection unpleasant yet melancholy but end
              appearance
            </h2>
            <button>Get Started Now</button>
          </div>
          <div className={cx(styles.homeTopBodyFouthContentBelow)}>
            <div className={cx(styles.contentBelowFirst)}>
              {Data.text.map((DataContent, idx) => {
                return (
                  <div className={cx(styles.point)} key={idx}>
                    <div className={cx(styles.pointgrid1)}>
                      <h2>{DataContent.Number}</h2>
                    </div>
                    <div className={cx(styles.pointgrid2)}>
                      <h3>{DataContent.subject}</h3>
                      <p>{DataContent.Content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={cx(styles.contentSecond)}>
              <img src="/images/Group 282.png" alt="video" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTopFourth;
