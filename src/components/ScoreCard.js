import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.css";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";

class ScoreCard extends React.Component {
  styles = {
    color: "blue",
    fontSize: "2px",
  };
  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: "140px", height: "60px" }}>
          <div className="card-body" style={this.styles}>
            <h6 className="card-title">score</h6>
            <p className="card-text">Team 1</p>
            <p className="card-text">Team 2</p>
            <button type="button" className="btn btn-warning">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
