import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Headlines.css";
import "../css/Videos.css";
import Logo from "../images/NFL_Draft_reglogo.png";
import ProfilePage from "../Profile/ProfilePage";
const Headlines = () => {
  return (
  <section>
  <div className="card border-primary mb-3" style = {{maxWidth: "18rem"}}>
  <div className="card-header"><strong>Profile</strong></div>
  <ProfilePage/>

</div>
<div className="card border-secondary mb-3" style = {{maxWidth: "18rem"}}>
<div className="card-header"><strong>Top Headlines</strong></div>
     <div className="card-body text-primary">
     <img src={Logo} className="image-autoFit" alt="NFL Logo" />
     <ul className="links" >
         <li><a href="https://www.sbnation.com/nfl-draft">
                 2021 NFL Draft Starts
         </a></li>

         <li><a href="https://www.si.com/nfl/dolphins/news/complete-2021-nfl-draft-team-by-team-rundown">
                  Your NFL Team Draft 2021
         </a></li>

         <li><a href="https://www.pff.com/news/draft-film-study-pros-and-cons-2021-nfl-draft">
                  Pros and Cons For The 2021 NFL Draft
         </a></li>
  </ul>
  </div>
</div>
<div className="card border-success mb-3" style = {{maxWidth: "18rem"}}>
<div className="card-header"><strong>This Week's Top Video</strong></div>
  <div className="card-body text-secondary">
  {/* <video controls width="250"> */}
  
      <iframe width="230" height="315" src="https://www.youtube.com/embed/BP7kUVZW5Gk" title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture" allowfullscreen>
      </iframe>
       {/* <ReactPlayer 
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />  */}
       {/* </video>  */}
  </div>
</div>

<div className="card border-danger mb-3" style = {{maxWidth: "18rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body text-danger">
    <h5 className="card-title">Danger card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-warning mb-3" style = {{maxWidth: "18rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body text-warning">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-info mb-3" style = {{maxWidth: "18rem"}}>
  <div className="card-header">Header</div>
  <div className="card-body text-info">
    <h5 className="card-title">Info card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div cclassName="card border-dark mb-3" style = {{maxWidth: "18rem"}}>
 {/*  <div className="card-header">Header</div>
  <div className="card-body text-dark">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
</div>
    </section>
  );
};

export default Headlines;
