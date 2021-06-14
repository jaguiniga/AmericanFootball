import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Roster } from "../Roster";
import cowboys from "../images/NFLteamIcons/DAL.ico";
import seahawks from "../images/NFLteamIcons/SEA.ico";
import jax from "../images/NFLteamIcons/JAX.ico";
const TeamRoster = () => {
  return (
    <section>
      <div
        className="card border-secondary mb-3"
        style={{
          maxWidth: "18rem",
          minWidth: "18rem",
        
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">
          <strong>Team Rosters</strong>
        </div>
        <div className="card-body ">
          <ul style={{ listStyleType: "none" }}>
            <li style={{ textAlign: "left" }}>
              {Roster.map((data, key) => {
                return (
                  <div key={key}>
                    <a href={data.weblink}>{data.team} </a>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default TeamRoster;
