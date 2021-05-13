import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ScoreCard from "./ScoreCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ControlledCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="align-self-end">
          <ScoreCard />
          <ScoreCard />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        2nd ScoreCard Component goes here
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        3rd ScoreCard Component goes here
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
