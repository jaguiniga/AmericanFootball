import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Headlines.css";

const Headlines = () => {
  return (
    <section>
      <div className="headlines">
        <h1>
          <bold>Top Headlines</bold>
        </h1>

        <p>
          <NavLink exact activeClassName="active-link" to="/termsrules">
            {" "}
            1. The NFL 2021 Draft Starts.
          </NavLink>
        </p>
        <p>
          <NavLink exact activeClassName="active-link" to="/houserules">
            {" "}
            2. Who Did Your NFL Team Draft for 2021.
          </NavLink>
        </p>
        <p>
          <NavLink exact activeClassName="active-link" to="/privacy">
            {" "}
            3. 2021 NFL draft: Pros and cons for every first-round pick.
          </NavLink>
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Headlines;
