import React from "react";
import styles from "./Bt9.module.css";

export default function Bt9() {
  const buttonTypes = ["success", "warning", "danger", "primary"];

  return (
    <div className={styles.container}>
      {buttonTypes.map((type, index) => (
        <div key={index} className={`${styles.item} ${styles[type]}`}>
          {type}
        </div>
      ))}
    </div>
  );
}
