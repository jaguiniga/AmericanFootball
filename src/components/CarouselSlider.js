import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ScoreCard from "./ScoreCard";
import "../css/CarouselSliders.css";

const ControlledCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var list1 = [
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
  ];
  var list2 = [
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
  ];
  var list3 = [
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
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
