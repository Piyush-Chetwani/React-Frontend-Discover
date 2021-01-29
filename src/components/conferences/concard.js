import React from 'react';
import styles from "../../containers/Conferences/Conferences.module.css";
import c from "../../assets/2.png";
import d from "../../assets/10.PNG";

function Concard(props) {
  const style = {
     fontFamily: "Poppins",
     fontStretch: "normal",
     fontStyle: "normal",
     letterSpacing: "normal",
     textAlign: "left",
     color: "#000000",
     fontWeight: "normal",
     fontSize: "16px",
     float:"left",
     lineHeight: "0.36",
     marginRight:"10px"
  }

  return  (
    <div style={{marginRight:"2%"}}>
    <div className={styles.Whole}>
    <div className={styles.Card}>
    <div style={{width:"37%", height:"100%", float:"left"}}>
    <img src={props.prod.img} style={{width:"99%", marginTop:"10%", float:"left", lineHeight:"0.01"}} alt=""/> <br/>
    <a href={props.prod.link}>
    <div className={styles.buttonSite}> <p className={styles.apply}>APPLY</p> <p style={{float:"left"}}> <img src = {c}  style={{width:"80%", paddingLeft:"92%"}} alt=""/></p> </div> </a>
    </div>
    <p className={styles.Topic}> {props.prod.topic} </p>
    <p className={styles.description}> {props.prod.desc}</p>
    <div style={{lineHeight:"0.38", float:"left"}} ><p className={styles.Sub} style={{fontWeight:"bold"}}>Date</p> <p className={styles.Sub}>{props.prod.start} </p>
    {props.prod.end===""? null :
    <div><p style={{lineHeight:"0.10"}}> <br/> </p> <p className={styles.Sub} style={{fontWeight:"bold"}}>Application Closes</p> <p className={styles.Sub}>{props.prod.end} </p></div>}</div>
    <p className={styles.Sub} style={{fontWeight:"bold", lineHeight:"0.38", paddingLeft:"72%"}}><br/><br/>At</p> <p className={styles.Sub} style={{color:"#fb6304", paddingLeft:"72%", lineHeight:"1.18"}}>{props.prod.place} </p>
    </div>
    </div>

    <div className={styles.page} style={{marginLeft:"auto", marginRight:"auto", display:"block"}}>
    <div className={styles.mobile}>
    <img src={props.prod.img} style={{height:"20%", marginLeft:"auto", marginRight:"auto", display:"block", paddingTop:"3%"}} alt=""/>
    <p className={styles.Topic} style={{textAlign:"center"}}> {props.prod.topic} </p>
    <p className={styles.Write} style={{textAlign:"left", paddingLeft:"3%"}}> {props.prod.desc}</p>
    <div style={{float:"left", paddingLeft:"3%"}}><p style = {style}> <p className={styles.on}> On  </p> <p style={{fontSize:"15px"}}> {props.prod.start} </p> <br/><br/><br/><br/><br/>
    {props.prod.end===""? null :
    <div><p className={styles.on}>Application Closes </p> <p style={{fontSize:"15px"}}> {props.prod.end} </p> </div>} </p></div>
    <div style={{float:"left", paddingLeft:"3%"}}><p style = {style}> <p className={styles.on}> At </p> <span className={styles.place}><p style={{fontSize:"15px"}}>{props.prod.place}</p> </span>  </p> </div>
    <a href={props.prod.link}><img src={d} style={{width:"98%", marginLeft:"1%", marginBottom:"3%"}} alt=""/></a>
    </div>
    </div>
    </div>


);
}

export default Concard;
