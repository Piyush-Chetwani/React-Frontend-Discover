import React from "react";
import styles from "./Homebody.module.css";
import mainDisplay from "../../../assets/HeroPic.svg";
import mainDisplayMob from "../../../assets/Layer.svg";
import { HomePage } from "../../../utils/content";

function Homebody(props) {
  return (
    <div className={styles.Homebody}>
      <div className={styles.topic}>{HomePage.HeroTitle}</div>
      <p className={styles.para}>{HomePage.HeroContent}</p>
      <div
        className="button"
        style={{ fontSize: "1.25em", marginBottom: "30px", padding:"5px 40px" }}
        onClick={() => props.setClicked(true)}
      >
        Join Now
      </div>
      <div className={styles.imgContainer}>
        {" "}
        <img src={mainDisplay} alt="main-display" class={styles.heroImgDesk}/>{" "}
        <img src={mainDisplayMob} alt="main-display" class={styles.heroImgMob} />{" "}
      </div>
      <div className={styles.imgBg}></div>
    </div>
  );
}

export default Homebody;
