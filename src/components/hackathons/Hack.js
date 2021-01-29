import React from 'react';
import styles from '../../containers/Hackathon/Hackathon.module.css';
import b from "../../assets/1.png";
import c from "../../assets/2.png";
import logo from "../../assets/logo.svg";

function Hack(props) {
  const style = {
 fontFamily: "Poppins",
 fontStretch: "normal",
 fontStyle: "normal",
 letterSpacing: "normal",
 textAlign: "left",
 color: "#000000",
 fontWeight: "normal",
 fontSize: "15px",
 float:"left",
 lineHeight: "0.36",
 marginRight:"3px"
}


  const fonts = {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "1.36",

  }

  const fontss = {
    fontSize: "11px",
    fontWeight: "bold",
    lineHeight: "1.36",
  }
  const fontsz = {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "0.05",
    marginLeft: "40px",
  }


  const atom = {

    fontSize: "20px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000000",
    marginRight: "2%"
  }
//{props.product.subtopic}

  return (
    <div style={{ marginRight: "2%" }}>
      <div className={styles.App}>
        <div className={styles.hackathonCard}>
          <div className={styles.Block}>
            <div className={styles.Cards}>
            <div>
              <div style={atom}>
                <div><img src={props.product.img || logo} style={{height: "50px", float: "left", paddingTop: "1%", marginLeft: "1%", marginRight:"10px" }} className={styles.Pic} alt="" /> </div>
                <div style={{height:"60px", overflow:"hidden"}}>{props.product.text || "N/A"}</div></div>
                </div>
              <div style={{clear:"both"}}>
              <div style={{height:"50px", overflow:"hidden"}}>
              <p style={style, fonts}>{props.product.subtopic}</p>
              </div>
              <p style={style, fontss}> Prize Money </p>
              <img src={b} style={{ width: "8%", float: "left" }} alt="" /><p style={style, fontsz}> {props.product.prize || "N/A"} </p>
              <p style={{ lineHeight: "0.5" }}><br /><hr /></p>
              <div style={{ float: "left"}}><p style={style}> <p className={styles.on}> On  </p> {props.product.date} <br /><br /><br /><br /><br /> <p className={styles.on}> Application Closes </p> {props.product.end || "N/A"} </p></div>
              <div style={{ float: "left", marginLeft:"40px" }}><p style={style}> <p className={styles.on}> At </p> <span className={styles.sp}>{props.product.city} </span>  </p>  <br /> <br /> </div>
              <a href={props.product.register}>
                <div className={styles.site}> <p className={styles.visit}>VISIT</p> <p style={{ float: "left" }}> <img src={c} style={{ width: "35%", float: "left", paddingLeft: "30px" }} alt="" /></p> </div> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  );

}


export default Hack;
