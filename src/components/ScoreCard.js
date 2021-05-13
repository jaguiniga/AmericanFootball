import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.css";

function ScoreCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Why you should use skin masks ?</h4>
              <p className="card-text">
                Skin masks help us to make are skin fresh and also they protect
                our skin from the harm rays of sun
              </p>
              <button type="button" className="btn btn-warning">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
