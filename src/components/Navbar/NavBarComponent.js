import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

import "../../css/NavBar.css";

function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          American Football
          <i className="fas fa-football-ball fa-fw" />
        </a>
        <div className="ml-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {/* home */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="fas fa-home" />
                </a>
              </li>
              {/* signup */}
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  <i class="fas fa-sign-in-alt" />
                </a>
              </li>
              {/* search */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fas fa-search" />
                </a>
              </li>
              {/* user profile */}
              <li className="nav-item">
                <a className="nav-link" href="UserSignedIn">
                  <i class="fas fa-user" />
                </a>
              </li>
              {/* site menu list */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="far fa-list-alt" />
                </a>
              </li>

               {/* site contact us */}
               <li className="nav-item">
                <a className="nav-link" href="ContactUs">
                  <i class="fas fa-comment-alt" />
                </a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
