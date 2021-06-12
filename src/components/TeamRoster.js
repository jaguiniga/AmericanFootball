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
        <h5 className="card-title">View Your Team</h5>
          <ul className="links">
            <li style = {{color:"black"}}>
            {/* <h5>  <a href="https://www.sbnation.com/nfl-draft">Dallas Cowboys</a></h5> */}
            {Roster.map((data, key) => { 
              return(
                <div key = {key}>
                 <a href = {data.weblink} >{data.team}</a>

                </div>
              )


            })}

            </li>
          </ul>

          <ul className="links">
            <li className="bullets">
              {" "}
            <h5>  <a href="https://www.si.com/nfl/dolphins/news/complete-2021-nfl-draft-team-by-team-rundown">
                Green Bay Packers
              </a></h5>
            </li>
          </ul>

          <ul className="links">
            <li className="bullets">
            <h5> <a href="https://www.pff.com/news/draft-film-study-pros-and-cons-2021-nfl-draft">
                Jacksonville Jaguars
              </a></h5>
            </li>
          </ul>
        </div>
      </div>
     </div>
    </section>
  );

}
export default TeamRoster;
