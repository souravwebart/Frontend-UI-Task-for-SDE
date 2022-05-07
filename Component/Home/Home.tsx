import React from "react";
import HomeTop from "../../Sub-Component/HomeTop/HomeTop";
import HomeTopSecond from "../../Sub-Component/HomTopSecond/HomeTopSecond";
import cx from "classnames";
import styles from "./Home.module.scss";
import HomeTopThird from "../../Sub-Component/HomeTopThird/HomeTopThird";
import HomeTopFourth from "../../Sub-Component/HomeTopFourth/HomeTopFourth";
import HomeTopFifth from "../../Sub-Component/HomeTopFifth/HomeTopFifth";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <div className="home">
        <div className={cx(styles.hometop)}>
          <Header />
          <HomeTop />
        </div>
        <div className="hometopsecond">
          <HomeTopSecond />
        </div>
        <div className="hometopThird">
          <HomeTopThird />
        </div>
        <div className="hometopFourth">
          <HomeTopFourth />
        </div>
        <HomeTopFifth />
      </div>
    </>
  );
}

export default Home;
