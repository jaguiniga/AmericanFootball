import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Injury = () => {

  return (
    <section>
      
      <div
        className="card border-success mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">
          <strong>Team Injury update</strong>
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
     
    </section>
  );

}
export default Injury;
