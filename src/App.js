import React from "react";
import NavBar from "./Navbar/NavBarComponent";
import "./App.css";
import CarouselSlider from "./components/CarouselSlider";
import Footer from "./FooterComponent";
import { Route, Switch, NavLink } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div id="main-header-scoreboard">
          <CarouselSlider />
        </div>
        <div id="main-page-nav">
          <NavBar />
        </div>

        <div id="main-page-wrapper"></div>
        <div id="main-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainPage;
