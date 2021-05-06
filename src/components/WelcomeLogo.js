import React, { Component } from "react";
import Logo from "../images/welcomeLogo.png";
import "../css/WelcomeLogo.css";

function WelcomeLogo() {
  return (
    <div className="autoFit">
      {/* <h1>Welcome To American Football</h1> */}
      <div>
        <img src={Logo} className="image-autoFit" alt="Football Player" />
        Put some test here
      </div>
    </div>
  );
}

export default WelcomeLogo;
