import React from "react";
import styles from "./bt4.module.css";

export default function Bt4() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.formTitle}>Form Sign up</h2>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="">
            Name
          </label>
          <input className={styles.formInput} type="text" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="">
            Email
          </label>
          <input className={styles.formInput} type="text" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="">
            Phone Number
          </label>
          <input className={styles.formInput} type="text" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="">
            Address
          </label>
          <textarea className={styles.formTextarea}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="">
            Skill
          </label>
          <div className={styles.formSkills}>
            <input type="checkbox" /> HTML
            <input type="checkbox" /> UX design
            <input type="checkbox" /> CSS
            <input type="checkbox" /> Javascript
          </div>
        </div>
        <button className={styles.formButton}>Sign up</button>
      </div>
    </div>
  );
}
