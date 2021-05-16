import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Headlines.css";

const Headlines = () => {
  return (
    <section>
      <div className="main-headlines">
        <strong>Top Headlines</strong>
        
     
        <ol className="links" >
          <NavLink exact activeClassName="active-link" to="/termsrules">
            {" "}
            1. The NFL 2021 Draft Starts.
          </NavLink>
        </ol>
        <ol className="links">
          <NavLink exact activeClassName="active-link" to="/houserules">
            {" "}
            2. Who Did Your NFL Team Draft for 2021.
          </NavLink>
        </ol>
        <ol className="links">
          <NavLink exact activeClassName="active-link" to="/privacy">
            {" "}
            3. 2021 NFL draft:Pros and cons of first round picks.
          </NavLink>
        </ol>
        
      </div>
    </section>
  );
};

export default Headlines;
