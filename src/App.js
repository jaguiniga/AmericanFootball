import React from "react";
import { Component } from "react";
import NavBar from "./Navbar/NavBarComponent";
import "./App.css";
import CarouselSlider from "./components/CarouselSlider";
import WelcomeLogo from "./components/WelcomeLogo";
import LoginComponent from "./components/LoginComponent";
import Footer from "./FooterComponent";
import "bootstrap/dist/css/bootstrap.css";

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
        <div className="column_left">
          <LoginComponent />
        </div>
        <div className="column_center">
          <p>
            center sdgsdgsdgfsdgsdgdsfgdfgdgfdgdsgdsfgdsg sfsfasfafas
            dfsafasfasfasf asdfsafasfasdfas sdfasfasdfasdf sadfasfasdfsafsa
            asdfasdfasfas asdfasfasdfas asdasfasdfsadf asdfasdfasf sadfsafsafdas
            center
          </p>
        </div>
        <div className="column_right">
          <p>
            Right dgsdfgsdgsdgdsfgdfsgsdfgdfgdgdfgdgddfgds fsdgdfgfd dgsddsg
            dfdsgdf this
          </p>
        </div>
      </div>
      <div id="main-footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
