import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Roster } from "../Roster";
const TeamRoster = () => {

  return (
    <section>
      
    <div
        className="card border-secondary mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">
          <strong>Team Rosters</strong>
        </div>
        <div className="card-body text-secondary">
        <div className="card-body text-danger">
        <div className="card-title">View Your Team</div>
          <ul className="links">
            <li>
            
            {Roster.map((data, key) => { 
              return(
                <div key = {key}>
                 <a href = {data.weblink} >{data.team}</a>

                </div>
              )


            })}

            </li>
          </ul>

        
        </div>
      </div>
     </div>
    </section>
  );

}
export default TeamRoster;
