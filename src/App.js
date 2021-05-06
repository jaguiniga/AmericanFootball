import React from "react";
import { Component } from "react";
import NavBar from "./Navbar/NavBarComponent";
import "./App.css";
import { Container, Row, Col } from "bootstrap-4-react";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import LoginComponent from "./components/LoginComponent";
import Footer from "./FooterComponent";
import Headlines from "./components/HeadlinesComponent";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";

function MainPage() {
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
        </div>

        {/* Center */}
        <div className="column_center">
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

export default MainPage;
