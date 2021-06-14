import React, { useRef, useState,useContext } from 'react';
import stadium from "../images/stadium.jpg";
import seahawks  from "../images/NFLHelmetIcons/seahawkshelmet.JPG";
import cowboys from "../images/NFLHelmetIcons/cowboyhelmet.JPG";
import vs from "../images/NFLHelmetIcons/vsicon.jpg";
import fans from "../images/Fans.gif";
import "../css/MainMatch.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,  
  getFirebase,
  signInWithGoogle,
  signInWithFacebook,
  firestore,
  timestamp
} from "../Firebase/firebase";

function MasterMainMatch() {

  const [user] = useAuthState(auth);

  return (
    <div >
      

      <section>
        {user ? <MainMatch/> : <WelcomeLogo />}
      </section>

    </div>
  );
}
function MainMatch() {

  
  return (
    <section>
      
      <div
       className="autoFit"
       style={{
        // backgroundImage:`url(${fans})`, 
         backgroundColor: "grey",
         maxWidth: "600rem",
         minWidth: "40rem",
         boxShadow:
           "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-body text-danger">
        <div>
        <img src={seahawks} 
             style = 
             {{height:"75px", 
               width:"75px",  
               backgroundColor: "green", 
               margin: "0", 
               float: "left"}} 
               alt="Seahawks Helmet" />

        <img src={cowboys} 
             style = 
             {{height:"75px", 
               width:"75px",  
               backgroundColor: "green", 
               margin: "0", float: "right",  
               transform: "scaleX(-1"}} 
               alt="Cowboy Helmet" />
      </div>
      <div>
          <p className="card-text">
          <img src={vs} 
             style = 
             {{height:"75px", 
               width:"75px",  
               margin: "0" }} 
               alt="vs logo" />
          </p>
         <h1 className = "heading"><strong> The Game Of The Week Seahawks vs. Cowboys</strong></h1>
        </div>
        </div>
      
      </div>
      
         
        
        
    </section>
  );

}
function WelcomeLogo() {
  return (
    <div
      className="autoFit"
      style={{
        maxWidth: "40rem",
        minWidth: "30rem",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      {/* <h1>Welcome To American Football</h1> */}
      <div>
        <img src={stadium} className="image-autoFit" alt="Football Player" />
        Football
      </div>
    </div>
  );
}

export default MasterMainMatch;