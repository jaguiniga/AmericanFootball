import React, { useState } from "react";

const MatchUps = () => {

  return (
    <section>
      
      <div
        className="card border-danger mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">Match Ups</div>
        <div className="card-body text-danger">
         <h5 className="card-title"> Game Time</h5>
          <h5 className="card-title"> Seahawks vs.  Cowboys</h5>
          <h5 className="card-title">Jaguars vs. Steelers</h5>
          <p className="card-text">
        Some quick example text to build on the card title and make up the
            bulk of the card'    s content.
          </p>
        </div>
      </div>
    </section>
  );

}
export default MatchUps;
