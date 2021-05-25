import React from "react";

import "../css/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.css";
import afc from "../images/NFLteamIcons/AFC.ico";
import ari from "../images/NFLteamIcons/ARI.ico";
import atl from "../images/NFLteamIcons/ATL.ico";
import bal from "../images/NFLteamIcons/BAL.ico";
import buf from "../images/NFLteamIcons/BUF.ico";
import car from "../images/NFLteamIcons/CAR.ico";
import chi from "../images/NFLteamIcons/CHI.ico";
import cin from "../images/NFLteamIcons/CIN.ico";
import cle from "../images/NFLteamIcons/CLE.ico";
import dal from "../images/NFLteamIcons/DAL.ico";
import den from "../images/NFLteamIcons/DEN.ico";
import det from "../images/NFLteamIcons/DET.ico";
import gb from "../images/NFLteamIcons/GB.ico";
import hou from "../images/NFLteamIcons/HOU.ico";
import ind from "../images/NFLteamIcons/IND.ico";
import jax from "../images/NFLteamIcons/JAX.ico";
import kc from "../images/NFLteamIcons/KC.ico";
import lac from "../images/NFLteamIcons/LAC.ico";
import lar from "../images/NFLteamIcons/LAR.ico";
import lv from "../images/NFLteamIcons/LV.ico";
import mia from "../images/NFLteamIcons/MIA.ico";
import min from "../images/NFLteamIcons/MIN.ico";
import ne from "../images/NFLteamIcons/NE.ico";
import nfc from "../images/NFLteamIcons/NFC.ico";
import nfl from "../images/NFLteamIcons/NFC.ico";
import no from "../images/NFLteamIcons/NO.ico";
import nyj from "../images/NFLteamIcons/NYJ.ico";
import phi from "../images/NFLteamIcons/PHI.ico";
import pit from "../images/NFLteamIcons/PIT.ico";
import sea from "../images/NFLteamIcons/SEA.ico";
import sf from "../images/NFLteamIcons/SF.ico";
import tb from "../images/NFLteamIcons/TB.ico";
import ten from "../images/NFLteamIcons/TEN.ico";
import was from "../images/NFLteamIcons/WAS.ico";

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
    let iconObj = {
      afcicon: afc,
      ariicon: ari,
      atlicon: atl,
      balicon: bal,
      buficon: buf,
      caricon: car,
      chiicon: chi,
      cinicon: cin,
      cleicon: cle,
      dalicon: dal,
      denicon: den,
      deticon: det,
      gbicon: gb,
      houicon: hou,
      indicon: ind,
      jaxicon: jax,
      kcicon: kc,
      lacicon: lac,
      laricon: lar,
      lvicon: lv,
      miaicon: mia,
      minicon: min,
      neicon: ne,
      nfcicon: nfc,
      nflicon: nfl,
      noicon: no,
      nyjicon: nyj,
      phiicon: phi,
      piticon: pit,
      seaicon: sea,
      sficon: sf,
      tbicon: tb,
      tenicon: ten,
      wasicon: was,
    };

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
            (QTR) (time) (Down) (Yards)
          </div>
          <div style={this.styles}>
            <img
              src={iconObj[this.props.iconTeam01]}
              alt="icon"
              style={this.myIcon}></img>
            <div style={{ fontSize: "14px", margin: "0 0 3px 15px" }}>
              {this.props.team01} (score)
            </div>
          </div>
          <div>
            <div style={this.styles}>
              <img
                src={iconObj[this.props.iconTeam02]}
                alt="icon"
                style={this.myIcon}></img>
              <div style={{ fontSize: "14px", margin: "0 0 2px 15px" }}>
                {this.props.team02} (score)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
