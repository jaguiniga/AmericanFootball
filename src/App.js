import React, { useContext, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBarComponent";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import Footer from "./FooterComponent";
import Headlines from "./components/HeadlinesComponent";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "./auth/UserProvider";
import UserProvider from "./auth/UserProvider";
import Login from "./components/LoginComponent";
import "./App.css";
import ChatRoom from "./Chatroom/ChatRoom";
import SignInChat from "./Chatroom/SignInChat";
import { Teams } from "./Teams";
import LoginPopUPComponent from "./components/LoginPopUPComponent";

function App() {
  const user = useContext(UserContext);
  const [isSignIn, setisSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const isSignInToggle = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div id="main-page-body">
      <UserProvider>
        <div id="main-header-scoreboard">
          <CarouselSlider />
        </div>
        <div id="main-page-nav">
          <NavBar
            isSignInButton={() => {
              isSignInToggle();
            }}
          />
        </div>
        <div id="main-page-wrapper">
          {/* Left Side */}
          <div className="column_left">
            <Login />
            <Teams />
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
