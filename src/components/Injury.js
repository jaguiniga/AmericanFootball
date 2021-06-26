import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { InjuryUpdate } from "../InjuryUpdate";
const Injury = () => {

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
          <strong>Team Injury update</strong>
        </div>
        <div className="card-body text-secondary">
        <div className="card-body text-danger">
        <div className="card-title">Who Is Injured?</div>
          <ul className="links">
            <li>
            
            {InjuryUpdate.map((data, key) => { 
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
export default Injury;
