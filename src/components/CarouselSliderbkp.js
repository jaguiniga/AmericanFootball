import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ScoreCard from "./ScoreCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ControlledCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var list = [
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
    <ScoreCard />,
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <div
        className="align-items-center"
        style={{
          display: "flex",
          jusitfyContent: "space-between",
          alignItems: "center",
        }}>
        {list}
      </div>
    </Carousel>
  );
};

export default ControlledCarousel;

/*
/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <div
        className="align-items-center"
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}>
        {list}
      </div>
    </Carousel>
  ); */
