import React from 'react';
import styles from '../../containers/Scholarship/Scholarship.module.css';
import b from "../../assets/11.png"
import c from "../../assets/2.png"
import d from "../../assets/10.PNG"
import logo from "../../assets/logo.svg";


function Scholarcard(props) {
  return (
    <div>
      <div className={styles.wholePage}>
        <div className={styles.Card}>
          <div className={styles.random}> <img src={props.product.img|| logo} className={styles.Img} alt="" /> </div>
          <div className={styles.Topic} style={{ float: "left" }}> <p className={styles.Top}> {props.product.offered_by} </p>
            <p className={styles.Text} style={{ float: "left", marginTop: "-6px" }}> {props.product.descrip}</p> </div>
          <div className={styles.Amount}> <p className={styles.Text} style={{ fontWeight: "bold" }}> Amount </p>
            <img src={b} style={{ width: "8%", float: "left", marginRight: "2%" }} alt="" /> <p className={styles.Text} style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "0.9" }}> {props.product.type||"N/A"}</p>
            <p style={{ lineHeight: "0" }}> <br /> </p>
            <p className={styles.Text} style={{ fontWeight: "bold", lineHeight: "0" }}> Terms & Conditions </p>
            <p className={styles.Text} style={{ lineHeight: "1.4" }}>{props.product.term}</p> </div>
          <div className={styles.Line}> </div>
          <div style={{ float: "left", marginLeft: "2%", marginTop: "1%" }}> <p className={styles.Text} style={{ lineHeight: "0", fontWeight: "bold" }}> Application Closes</p>
            <p className={styles.Text} style={{ lineHeight: "1" }}>{props.product.end} </p> <p style={{ lineHeight: "0.5" }}><br /></p>
            <div className={styles.location}>
            <p className={styles.Text} style={{ fontWeight: "bold", lineHeight: "0" }}> At</p>
            <p className={styles.Text} style={{ lineHeight: "1", width:"149px" }}>{props.product.college+', '+props.product.country}</p> <p style={{ lineHeight: "0" }}><br /></p>
            </div>
            <a href={props.product.link}>
              <div className={styles.site}><p className={styles.visit}>KNOW MORE</p> <p> <img src={c} style={{ width: "10%", paddingLeft: "1px", marginBottom:"5px" }} alt="" /></p> </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.mobile}>
          <div style={{ width: "90%" }}> <img src={props.product.img || logo} className={styles.mob} alt="" style={{height:"150px", paddingTop:"20px"}}/> </div>
          <div> <p className={styles.Top} style={{ fontSize: "17px", lineHeight: "1.5", float: "none" }}> {props.product.offered_by}</p> </div>
          <div> <p className={styles.Text} style={{ fontSize: "12px", float: "none" }}> {props.product.descrip}</p> </div>
          <div style={{ width: "40%", paddingLeft: "1%", float: "left" }}><p className={styles.Text} style={{ fontWeight: "bold", fontSize: "16px", lineHeight: "0.5" }}> Amount </p>
            <img src={b} style={{ width: "9%", float: "left", marginRight: "3%" }} alt="" /> <p className={styles.Text} style={{ fontWeight: "bold", fontSize: "14px", lineHeight: "1.2" }}>  {props.product.type||"N/A"}</p>
            <p className={styles.Text} style={{ lineHeight: "1.48", fontWeight: "bold", marginTop: "0" }}> Application Closes</p>
            <p className={styles.Text} style={{ lineHeight: "1" }}>{props.product.end} </p> </div>
          <div style={{ width: "52%", paddingLeft: "7%", float: "left" }}> <p className={styles.Text} style={{ fontWeight: "bold", lineHeight: "0" }}> Terms & Conditions </p>
            <p className={styles.Text} style={{ lineHeight: "1.4", fontSize: "13px" }}>{props.product.term}</p> <p style={{ lineHeight: "0" }}> <br /> </p>
            <p className={styles.Text} style={{ fontWeight: "bold", lineHeight: "0" }}> At</p>
            <p className={styles.Text} style={{ lineHeight: "1", color: "#fb6304" }}>{props.product.college+', '+props.product.country}</p></div>
          <a href={props.product.link}>
            <img src={d} style={{ width: "100%", marginTop: "2%" }} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Scholarcard;
