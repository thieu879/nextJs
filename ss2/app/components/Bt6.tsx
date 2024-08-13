import React from "react";
import "./bt6.scss";

export default function Bt6() {
  return (
    <div className="bt6-container">
      <div className="header">
        <div className="icon-title">
          <i className="fa-solid fa-bomb"></i>
          <div className="title-text">Đoán xem</div>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">home</button>
          <button className="nav-button">updates</button>
          <button className="nav-button">services</button>
          <button className="nav-button">features</button>
          <button className="nav-button">about us</button>
        </div>
        <div className="user-icon">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  );
}
