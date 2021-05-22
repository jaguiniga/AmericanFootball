import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.css";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";
import icon from "../images/NFLteamIcons/Bills.ico";
import { faFileExcel } from "@fortawesome/free-regular-svg-icons";

class ScoreCard extends React.Component {
  styles = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  myIcon = {
    width: "23px",
    height: "23px",
    margin: "0 0 0 10px",
  };

  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: "140px", height: "64px" }}>
          <div
            class="card-title"
            style={{
              height: "18rem",
              fontSize: "10px",
              marginBottom: "0",
              fontWeight: "bold",
              borderBottom: "2px solid lightgray",
            }}>
            1st 14:15 1st & 10
          </div>
          <div style={this.styles}>
            <img src={icon} alt="icon" style={this.myIcon}></img>
            <div style={{ fontSize: "14px", margin: "0 0 3px 15px" }}>
              score
            </div>
          </div>
          <div>
            <div style={this.styles}>
              <img src={icon} alt="icon" style={this.myIcon}></img>
              <div style={{ fontSize: "14px", margin: "0 0 2px 15px" }}>
                score
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
