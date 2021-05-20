import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../css/Headlines.css";

const Headlines = () => {
  return (
    <section>
      <div className="main-headlines">
        <strong>Top Headlines</strong>
        
     
      <ul className="links" >
         <a href="https://www.sbnation.com/nfl-draft">
                1. ESPN 2021 NFL Draft Starts</a>
       </ul>
        <ul className="links">
        <a href="https://www.si.com/nfl/dolphins/news/complete-2021-nfl-draft-team-by-team-rundown">
                 2. Your NFL Team Draft 2021</a>
        </ul>
        <ul className="links">
        <a href="https://www.pff.com/news/draft-film-study-pros-and-cons-2021-nfl-draft">
                 3. Pros and Cons For The 2021 NFL Draft</a>
        </ul>
        
      </div>
    </section>
  );
};

export default Headlines;
