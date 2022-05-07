import React, { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Header.module.scss";

import { Hamburger } from "../../SVG/svg";

function Header() {
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);

  const close = () => setActive(false);

  return (
    <>
      <div className={cx(styles.Header)}>
        <div className={cx(styles.desktopHeader)}>
          <div className="container">
            <div className={cx(styles.navbar)}>
              <div className={cx(styles.Headerlogo)}>
                <a href="/">AR Shakir</a>
              </div>
              <div className={cx(styles.Headermenu1)}>
                <ul>
                  <li className={cx(styles.downarrowflex)}>
                    <a href="#">Product</a>
                    <img src="/images/downarrow.png" alt="downarrow" />
                  </li>
                  <li className={cx(styles.downarrowflex)}>
                    <a href="#">Template</a>
                    <img src="/images/downarrow.png" alt="downarrow" />
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className={cx(styles.menu2)}>
                <a href="#">Sign In</a>
                <button>Start Free</button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(styles.mobilenavbar)}>
          <div className={cx(styles.Headerlogo)}>
            <a href="/">AR Shakir</a>
          </div>
          <div className={cx(styles.menu)} onClick={handleShow}>
            <Hamburger />
          </div>
          {active ? (
            <div className={cx(styles.mobilenavmenubar)}>
              <div className={cx(styles.closeIcon)} onClick={close}>
                <p>X</p>
              </div>
              <div className={cx(styles.Headermenu2)}>
                <ul>
                  <li className={cx(styles.downarrowflex)}>
                    <a href="#">Product</a>
                    <img src="/images/downarrow.png" alt="downarrow" />
                  </li>
                  <li className={cx(styles.downarrowflex)}>
                    <a href="#">Template</a>
                    <img src="/images/downarrow.png" alt="downarrow" />
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
