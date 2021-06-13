import React, { useContext, useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { UserContext } from "./auth/UserProvider";
import { Teams } from "./Teams";
import NavBar from "./components/Navbar/NavBarComponent";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import Footer from "./FooterComponent";
import Headlines from "./components/HeadlinesComponent";
import UserProvider from "./auth/UserProvider";
import Login from "./components/LoginComponent";
import ChatRoom from "./Chatroom/ChatRoom";
import SignInChat from "./Chatroom/SignInChat";
import LoginPopUPComponent from "./components/LoginPopUPComponent";
import GoogleAdCard from "./components/GoogleAdCard";

function App() {
  const user = useContext(UserContext);
  const [isSignIn, setisSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const isSignInToggle = (isSignIn) => {
    setisSignIn(isSignIn);
  };

  const isOpenToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <div id="main-page-body">
      <UserProvider>
        <div id="main-header-scoreboard">
          <CarouselSlider />
        </div>
        <div id="main-page-nav">
          <NavBar
            isSignInButton={(isSignIn) => {
              isSignInToggle(isSignIn);
            }}
            isOpenButton={(isOpen) => {
              isOpenToggle(isOpen);
            }}
          />
        </div>
        <div id="main-page-wrapper">
          {/* Left Side */}
          <div className="column_left">
            <Teams />
            <GoogleAdCard />
          </div>
          {/* Center */}
          <div className="column_center">
            <WelcomeLogo />
            {user ? <ChatRoom /> : <SignInChat />}
            {/* <Create/>
            <Home /> */}
          </div>
          {/* Right Side */}
          <div className="column_right">
            <Headlines />
          </div>
        </div>
        <div id="main-footer">
          <Footer />
        </div>
        {/*Popup for Login when using Navbar sign in icon */}
        {isSignIn && isOpen && (
          <LoginPopUPComponent
            popUpToggle2={(isOpen) => {
              setIsOpen(isOpen);
            }}
          />
        )}
      </UserProvider>
    </div>
  );
}

export default App;
