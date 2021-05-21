import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.css";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";
import icon from "../images/NFLteamIcons/Bills.ico";

class ScoreCard extends React.Component {
  styles = {
    color: "blue",
    fontSize: "2px",
    background: "yellow",
  };

  myIcon = {
    width: "30px",
    height: "30px",
  };

  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: "140px", height: "60px" }}>
          <img src={icon} alt="icon" style={this.myIcon}></img>
          <img src={icon} alt="icon" style={this.myIcon}></img>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
