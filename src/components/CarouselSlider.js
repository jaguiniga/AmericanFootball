import React, { useState } from "react";
import ScoreCard from "./ScoreCard";
import "../css/CarouselSliders.css";

const ControlledCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var list1 = [
    <ScoreCard
      team01="NYG"
      team02="ARI"
      iconTeam01="nygicon"
      iconTeam02="ariicon"
    />,
    <ScoreCard
      team01="ATL"
      team02="BAL"
      iconTeam01="atlicon"
      iconTeam02="balicon"
    />,
    <ScoreCard
      team01="BUF"
      team02="CAR"
      iconTeam01="buficon"
      iconTeam02="caricon"
    />,
    <ScoreCard
      team01="CHI"
      team02="CIN"
      iconTeam01="chiicon"
      iconTeam02="cinicon"
    />,
    <ScoreCard
      team01="CLE"
      team02="DAL"
      iconTeam01="cleicon"
      iconTeam02="dalicon"
    />,
    <ScoreCard
      team01="DEN"
      team02="DET"
      iconTeam01="denicon"
      iconTeam02="deticon"
    />,
  ];
  var list2 = [
    <ScoreCard
      team01="GB"
      team02="HOU"
      iconTeam01="gbicon"
      iconTeam02="houicon"
    />,
    <ScoreCard
      team01="IND"
      team02="JAX"
      iconTeam01="indicon"
      iconTeam02="jaxicon"
    />,
    <ScoreCard
      team01="KC"
      team02="LAC"
      iconTeam01="kcicon"
      iconTeam02="lacicon"
    />,
    <ScoreCard
      team01="LAR"
      team02="LV"
      iconTeam01="laricon"
      iconTeam02="lvicon"
    />,
    <ScoreCard
      team01="MIA"
      team02="MIN"
      iconTeam01="miaicon"
      iconTeam02="minicon"
    />,
    <ScoreCard
      team01="NE"
      team02="NO"
      iconTeam01="neicon"
      iconTeam02="noicon"
    />,
  ];
  var list3 = [
    <ScoreCard
      team01="NYJ"
      team02="PHI"
      iconTeam01="nyjicon"
      iconTeam02="phiicon"
    />,
    <ScoreCard
      team01="PIT"
      team02="SEA"
      iconTeam01="piticon"
      iconTeam02="seaicon"
    />,
    <ScoreCard
      team01="SF"
      team02="TB"
      iconTeam01="sficon"
      iconTeam02="tbicon"
    />,
    <ScoreCard
      team01="TEN"
      team02="WAS"
      iconTeam01="tenicon"
      iconTeam02="wasicon"
    />,
    <ScoreCard
      team01="NYG"
      team02="ARI"
      iconTeam01="nygicon"
      iconTeam02="ariicon"
    />,
    <ScoreCard team01="" team02="" iconTeam01="" iconTeam02="" />,
  ];

  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ height: "80px" }}>
      <div
        className="carousel-inner"
        style={{ margin: "auto", height: "80px", width: "60%" }}>
        <div className="carousel-item active">
          <div
            style={{
              width: "60%",
              display: "flex",
              jusitfyContent: "space-around",
              alignItems: "center",
            }}>
            {list1}
          </div>
        </div>
        <div className="carousel-item">
          <div
            style={{
              width: "60%",
              display: "flex",
              jusitfyContent: "flex-start",
              alignItems: "center",
            }}>
            {list2}
          </div>
        </div>
        <div className="carousel-item">
          <div
            style={{
              width: "60%",
              display: "flex",
              jusitfyContent: "center",
              alignItems: "center",
            }}>
            {list3}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ControlledCarousel;
