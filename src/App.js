import React from "react";
import { Component } from "react";
import NavBar from "./Navbar/NavBarComponent";
import "./App.css";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import Login from "./components/LoginComponent";
import Footer from "./FooterComponent";

class MainPage extends Component {
  render() {
    return (
      <div id="main-page-body">
        <div id="main-header-scoreboard">
          <CarouselSlider />
        </div>
        <div id="main-page-nav">
          <NavBar />
        </div>
        <div id="main-page-wrapper">
          <div className="boxLeft">
            <Login />
          </div>
          <div className="boxMain">
            <WelcomeLogo />
          </div>
          <div className="boxRight">Right box</div>
        </div>
        <div id="main-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainPage;
