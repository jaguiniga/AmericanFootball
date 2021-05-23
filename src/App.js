import React, { useContext } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBarComponent";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import Footer from "./FooterComponent";
import Headlines from "./components/HeadlinesComponent";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from './auth/UserProvider';
import UserProvider from "./auth/UserProvider";
import Login from "./components/LoginComponent";
function App() {
  
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
        <Login/>
        
          
        </div>

        {/* Center */}
        <div className="column_center">
          <WelcomeLogo />
          <WelcomeLogo />
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
