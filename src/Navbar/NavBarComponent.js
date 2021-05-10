import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div>
      <nav className="navbar">
        <NavLink
          exact
          activeClassName="active-link"
          to="/firstpage"
          className="navbar-logo">
          American Football
          <i class="fas fa-football-ball fa-fw" />
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              to="/"
              onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              to="/form"
              onClick={closeMobileMenu}>
              Sign Up
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
