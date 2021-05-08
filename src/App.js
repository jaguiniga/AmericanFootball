import React from "react";
import NavBar from "./Navbar/NavBarComponent";
import "./App.css";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import Footer from "./FooterComponent";
import Headlines from "./components/HeadlinesComponent";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div id="main-page-body">
      <div id="main-header-scoreboard">
        <CarouselSlider />
      </div>
      <div id="main-page-nav">
        <NavBar />
      </div>
      <div id="main-page-wrapper">
        {/* Left Side */}
        <div className="column_left">
          <Headlines />
          <Headlines />
        </div>

        {/* Center */}
        <div className="column_center">
          <WelcomeLogo />
          <WelcomeLogo />
        </div>

        {/* Right Side */}
        <div className="column_right">
          <Headlines />
          <Headlines />
        </div>
      </div>
      <div id="main-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
