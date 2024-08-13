import React from "react";
import styles from "./Bt3.module.css";

export default function Bt3() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Admin Login</h2>
      <label htmlFor="" className={styles.label}>
        Email Address
      </label>
      <input type="email" className={styles.input} />
      <label htmlFor="" className={styles.label}>
        Password
      </label>
      <input type="password" className={styles.input} />
      <div className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} />
        <p className={styles.keepSignedIn}>keep me signed in</p>
      </div>
      <button className={styles.button}>Continue</button>
      <p>or sign up with</p>
      <div className={styles.socialButtons}>
        <button className={styles.socialButton}>Google</button>
        <button className={styles.socialButton}>Apple</button>
        <button className={styles.socialButton}>Facebook</button>
      </div>
      <p className={styles.signupText}>
        don't have an Account?{" "}
        <span className={styles.signupLink}>Sign up here</span>
      </p>
    </div>
  );
}
