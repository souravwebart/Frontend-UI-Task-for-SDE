import React from "react";
import cx from "classnames";
import styles from "./HomeTopFifth.module.scss";
import Data from "../../utils/data";

function HomeTopFifth() {
  return (
    <>
      <div className={cx(styles.homeTopFifthBody)}>
        <div className="container">
          <div className={cx(styles.homeTopFifthBodyTop)}>
            <div className={cx(styles.homeTopFifthBodyText)}>
              <h2>Germany-based & GDPR Compliant</h2>
            </div>
            <div className={cx(styles.homeTopFifthBodygrid)}>
              {Data.privacy.map((cardData, idx) => {
                return (
                  <div className={cx(styles.homeTopFifthBodygrid1)} key={idx}>
                    <div className={cx(styles.homeTopFifthBodygridImg)}>
                      <img src={cardData.Icon} alt="" />
                    </div>
                    <div className={cx(styles.homeTopFifthBodyText)}>
                      <p>{cardData.Content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cx(styles.homeTopFifthBodyButtom)}>
            {Data.boxcontent.map((boxData, idx) => {
              return (
                <div className={cx(styles.homeTopFifthBodyButtomBox)} key={idx}>
                  <h2>{boxData.Subject}</h2>
                  <p>{boxData.Content}</p>
                  <button>Read More</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTopFifth;
