import { NavLink } from "react-router-dom";
import React, { useState } from "react";

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
          <ul className="links">
            <li className="bullets">
              <a href="https://www.sbnation.com/nfl-draft">
                Dallas Cowboys
                </a>
              <TeamRoster/>
            </li>
          </ul>

          <ul className="links">
            <li className="bullets">
              {" "}
              <a href="https://www.si.com/nfl/dolphins/news/complete-2021-nfl-draft-team-by-team-rundown">
                Green Bay Packers
              </a>
            </li>
          </ul>

          <ul className="links">
            <li className="bullets">
              <a href="https://www.pff.com/news/draft-film-study-pros-and-cons-2021-nfl-draft">
                Jacksonville Jaguars
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="card border-success mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        
      </div>
    </section>
  );

}
export default TeamRoster;
