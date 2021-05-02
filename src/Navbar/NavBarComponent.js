import React, { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Form from "../FormComponent";
import App from "../App";
import About from "../AboutComponent";
import Privacy from "../PrivacyComponent";
import Help from "../HelpComponent";
import TermsRules from "../TermsRulesComponent";
import HouseRules from "../HouseRulesComponent";
import Password from "../PasswordComponent";
import { Button } from "./Button";
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
      <>
        <nav className="navbar">
          <NavLink
            exact
            activeClassName="active-link"
            to="/"
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
      </>

      <Switch>
        <Route exact path="/form" component={Form} />
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/termsrules" component={TermsRules} />
        <Route exact path="/houserules" component={HouseRules} />
        <Route exact path="/password" component={Password} />
        {/* <Route render={() => <h1>ERROR NOT FOUND</h1>} /> */}
      </Switch>
    </div>
  );
}

export default Navbar;
