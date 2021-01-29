import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeFeatures.module.css";
import lappy from "../../../assets/hackathon.png";
import arrow from "../../../assets/arrow.svg";
import Conferences from "../../../assets/Conferences.svg";
import scholarships from "../../../assets/scholarships.svg";
import { HomePage } from "../../../utils/content";

function HomeFeatures() {
  return (
    <div className={styles.HomeFeatures}>
      <div className={styles.leftToRight}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={lappy}
            alt="Hackathon-img"
            className={styles.HackathonImg}
          />
          <Link to="/hackathons" style={{ textDecoration: "none" }}>
            <div className={`button ${styles.desktopBtn}`} style={{ padding: "10px 35px" }}>
              <span>Explore Now &nbsp;</span>
              <img src={arrow} alt="arrow-icon"/>
            </div>
          </Link>
        </div>
        <div className={styles.content}>
          <h3 className={styles.topic}>
            Discover & Participate in{" "}
            <span className={styles.topic_orange}>Hackathons</span> around the
            globe.
          </h3>
          <p>
            {HomePage.HackathonContent}
          </p>
          <Link to="/hackathons" style={{ textDecoration: "none" }}>
            <div className={`button ${styles.mobileBtn}`} style={{ padding: "10px 35px" }}>
              <span>Explore Now &nbsp;</span>
              <img src={arrow} alt="arrow-icon" style={{width:"20%"}}  />
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.rightToLeft}>
        <img
          src={Conferences}
          alt="Conferences"
          className={styles.ConferencesImg}
        />
        <div className={styles.content}>
          <h3 className={styles.topic}>
            Attend <span className={styles.topic_orange}>Conferences</span> that
            matter.
          </h3>
          <p>
            {HomePage.ConferencesContent}
          </p>
          <Link to="/conferences" style={{ textDecoration: "none" }}>
            <div className={["button", styles.btn].join(" ")} style={{ padding: "10px 35px" }}>
              <span>Explore Now &nbsp;</span>{" "}
              <img src={arrow} alt="arrow-icon"  style={{width:"20%"}}  />
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.leftToRight}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={scholarships}
            alt="scholarships-img"
            className={styles.scholarshipsImg}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.topic}>
            Catch{" "}
            <span className={styles.topic_orange}>Scholarships</span> to move ahead.
          </h3>
          <p>
            {HomePage.ScholarshipsContent}
          </p>
          <Link to="/scholarships" style={{ textDecoration: "none" }}>
            <div className="button" style={{ padding: "10px 35px" }}>
              <span>Explore Now &nbsp;</span>
              <img src={arrow} alt="arrow-icon" style={{width:"20%"}}  />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
