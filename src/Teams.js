import React from "react";
import "./css/Headlines.css";
import { teamRoster } from "./RosterComponent";
//import { Teams } from "./Teams";
export const Teams = () => {
  return (
    <>
      <div className="stock-container">
        {teamRoster.map((data, key) => {
          
            <div key={key}>
          <ul className="links">   
           
             <a href = {data.weblink}>{data.team} <code>&gt;</code></a>
         
          </ul>
        </div>
          
        })}
      </div>
    </>
  );
};