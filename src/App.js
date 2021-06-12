import React, { useContext } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBarComponent";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import Footer from "./FooterComponent";
import Headlines from "./components/HeadlinesComponent";
import Home from "./components/BlogPost/Home";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "./auth/UserProvider";
import UserProvider from "./auth/UserProvider";
import UserSignedIn from "./Profile/UserSignedIn";
import Login from "./components/LoginComponent";
import "./App.css";
import ChatRoom from "./Chatroom/ChatRoom";
import SignInChat from "./Chatroom/SignInChat";

import Create from "./components/BlogPost/Create";
import TeamRoster from "./components/TeamRoster";
import Injury from "./components/Injury";
import MatchUps from "./components/MatchUps";
import MainMatch from "./components/MainMatch";
import MasterMainMatch from "./components/MasterMainMatch";
function App() {
  const user = useContext(UserContext);
  const test = true;
  console.log(test);
  return (
    <div id="main-page-body">
      <UserProvider>
        <div id="main-header-scoreboard">
          <CarouselSlider />
        </div>
        <div id="main-page-nav">
          <NavBar />
        </div>
        <div id="main-page-wrapper">
          {/* Left Side */}
          <div className="column_left">
            <Login />
            <TeamRoster/>
            <Injury/>
            <MatchUps/>
          </div>
          {/* Center */}
          <div className="column_center">
            {user ? <MasterMainMatch /> : <WelcomeLogo />}
            {user ? <ChatRoom /> : <SignInChat />}
          </div>
          {/* Right Side */}
          <div className="column_right">
            <Headlines />
          </div>
        </div>
        <div id="main-footer">
          <Footer />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
