import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../../css/Videos.css";
import ReactPlayer from "react-player"

function Video() {
  return (
    <div className ="videos">
      <strong>Week Top Video</strong>
      
      {/* <h1>Top Video</h1> */}
      {/* <video controls width="250"> */}

      <iframe width="230" height="315" src="https://www.youtube.com/embed/Yc84nYs_o8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <ReactPlayer 
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      /> */}
      {/* </video> */}
    </div>
  )
}

export default Video;