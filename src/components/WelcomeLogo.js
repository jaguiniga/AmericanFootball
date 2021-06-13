import React from "react";

import stadium from "../images/stadium.jpg";
import "../css/WelcomeLogo.css";

function WelcomeLogo() {
  return (
    <div
      className="autoFit"
      style={{
        maxWidth: "40rem",
        minWidth: "40rem",
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      {/* <h1>Welcome To American Football</h1> */}
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light">
        <img
          src={stadium}
          className="image-autoFit"
          alt="welcom Logo"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </div>
  );
}

export default WelcomeLogo;
