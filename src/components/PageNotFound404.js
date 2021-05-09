import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/NavBarComponent";
import CarouselSlider from "./CarouselSlider";
import Footer from "../FooterComponent";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function PageNotFound404() {
  return (
    <div id="main-page-body">
      <div id="main-header-scoreboard">
        <CarouselSlider />
      </div>
      <div id="main-page-nav">
        <NavBar />
      </div>
      <div className="container">
        <div className="card rounded-top m-5">
          <div className="card-body">
            <h1>Page not found.</h1>
            <p>
              Go to the{" "}
              <NavLink exact activeClassName="active-link" to="/">
                {" "}
                homepage{" "}
              </NavLink>
            </p>
          </div>
          <div className="card-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound404;
