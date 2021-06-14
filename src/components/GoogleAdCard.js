import React from "react";
import googleAd from "../images/Advertisement/googleAdsenseLogo.jpg";

function GoogleAdCard() {
  return (
    <div
      classjName="card"
      style={{
        marginBottom: "15px",
        maxWidth: "18rem",
        minWidth: "18rem",
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light">
        <img
          src={googleAd}
          className="image-autoFit"
          alt="Google Ad Logo"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </div>
  );
}

export default GoogleAdCard;
