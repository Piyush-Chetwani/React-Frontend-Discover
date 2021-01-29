import React, { useState } from "react";
import styles from "./Navbar.module.css";
import useMediaQuery from "../../UseMediaQuery";
import { Link } from "react-router-dom";
import { NavbarContent } from "../../utils/content";


function Navbar(props) {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const renderLinks = NavbarContent.map((item) => (
    <Link to={item.link}>
      <div>{item.title}</div>
    </Link>
  ));

  const isMobile = useMediaQuery("(max-width: 1090px)");

  return (
    <nav className={styles.Nav}>
      <div className={styles.logoContainer}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.logo}>Z.Discover</div>
        </Link>
      </div>
      {(!isMobile || isNavOpen) && (
        <div className={styles.routes} onClick={toggleNav}>
          {renderLinks}
          <div className={styles.line}></div>
          <div className={`${styles.loginBtn}`}
            onClick={() => {
              props.setClicked(true);
            }}><p style={{ marginLeft: "-60px" }}>Sign In</p></div>
        </div>
      )}
      {isMobile ? (
        <>
          <button
            className={`${styles.btn} ${isNavOpen ? styles.open : ""}`}
            onClick={toggleNav}
            type="button"
            aria-label="open menu"
          />
        </>
      ) : (
          ""
        )}
      <div
        className={`${styles.loginBtn}`}
        onClick={() => {
          props.setClicked(true);
        }}>
        Sign In
      </div>
    </nav>
  );
}

export default Navbar;
