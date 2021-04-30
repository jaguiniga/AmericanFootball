import React, { Component } from "react";
import Logo from "../images/welcomeLogo.png";

function WelcomeLogo() {
  return (
    <div className="autoFit">
      <h1>Welcome To American Football</h1>
      <img src={Logo} className="autoFit" alt="Football Player" />
    </div>
  );
}

export default WelcomeLogo;
