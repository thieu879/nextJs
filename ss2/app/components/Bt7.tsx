import React from "react";
import styles from "./bt7.module.css";

export default function Bt7() {
  const buttonTypes = ["success", "warning", "danger", "primary"];

  const getButtonClass = (type:any) => {
    return [
      styles.button,
      styles[type],
    ].join(" ");
  };

  return (
    <div>
      {buttonTypes.map((type) => (
        <button key={type} className={getButtonClass(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}
