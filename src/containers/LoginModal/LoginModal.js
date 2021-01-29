import React, { useState } from "react";
import styles from "./LoginModal.module.css";
import a from "../../assets/Google.svg"

const LoginModal = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    props.alter();
  };
  return (
    <div className={styles.LoginModal}>
      <h2>Login</h2>
      <p>You can use your Zubi account to log in to any of our products</p>
      <form>
        <div className={styles.form_input}>
          <label>Email</label>
          <input
            type="text"
            name="email"
          ></input>
        </div>
        <div className={styles.form_input}>
          <label>Password</label>
          <input
            type="password"
            name="password"
          ></input>
        </div>

        <input type="submit" onClick={onSubmit} value="LOGIN" />
        <div style={{marginTop:"-4%", marginBottom:"1%"}}>OR</div>
        <div style={{marginBottom:"3%", textTransform:"none", letterSpacing:"1.5px", textAlign:"center"}} class={styles.google}>Continue with Google
        <img src={a} style={{backgroundColor:"white", borderRadius:"50%", padding:"4px", marginLeft:"3px", marginBottom:"-3px"}}/></div>

      </form>
      <div className={styles.base}>
      <p style={{marginTop:"1%"}}><b>Forgot Password?</b></p>
        <p>
          Don't have an account?
          <span className={styles.link}>
             Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
