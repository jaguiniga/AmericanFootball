import React, { useRef, useState,useContext } from 'react';
import {auth} from "../Firebase/firebase";
import { UserContext } from "../auth/UserProvider";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./ChatRoom.css";
import Feed from "./Feed";
import Widgets from "./Widgets";




// message sender
function ChatApp() {

  const [user] = useAuthState(auth);

  return (
    <div className="ChatApp" >
      <header>
        <h1>🏈 American Football </h1>
        
    
      </header>

      <section>
       
        {user ? <Feed /> : <SignInChat />}
        {/* <Widgets /> */}
      </section>

    </div>
  );
}

function SignInChat() {

  
  return (
    <>
     <h2>Please Sign in to post </h2>
      <p>Do not violate the community guidelines</p>
    </>
  )

}





export default ChatApp;
