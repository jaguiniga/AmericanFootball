import React, {Component, useState} from "react";

import {Route, Switch, NavLink} from "react-router-dom";
import Form from '../FormComponent';
import FirstPage from '../FirstPage';
import About from '../AboutComponent';
import Privacy from '../PrivacyComponent';
import Help from '../HelpComponent';
import TermsRules from '../TermsRulesComponent';
import HouseRules from '../HouseRulesComponent';
import Password from "../PasswordComponent";
import { Button } from './Button';
import Dropdown from './Dropdown';
import './NavBar.css';


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
        return(    
                <div>         
                  <>
                    <nav className = 'navbar'>
                      <NavLink exact activeClassName="active-link" to="/" className = 'navbar-logo'>
                        American Football
                        <i class='fab fa-firstdraft' />
                      </NavLink>
                      <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' :'fas fa-bars'}/>
                      </div>
                      <ul className = {click ? 'nac-menu active' : 'nav-menu'}>
                        
                        <li className = 'nav-item'>
                          <NavLink exact 
                            activeClassName = 'nav-links' 
                            to = "/" 
                            onClick = {closeMobileMenu}
                            >
                            Home
                          </NavLink>
                        </li>
                        
                        <li className = 'nav-item'>
                          <NavLink exact
                            className='nav-links-mobile'
                            to='/form'
                            onClick={closeMobileMenu}
                          >
                            Sign Up <i className='fas fa-caret-down'/>
                          </NavLink>
                          {dropdown && <Dropdown />}
                        </li>

                      </ul>
                      <Button />
                    </nav>
                  </>

                  <NavLink exact activeClassName="active-link" to="/form"> Sign Up </NavLink>
                  <NavLink exact activeClassName="active-link" to="/"> Main Page </NavLink>
                  
            
                  <Switch>
                    <Route exact path='/form' component={Form} />
                    <Route exact path='/' component={FirstPage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/privacy' component={Privacy} />
                    <Route exact path='/help' component={Help} />
                    <Route exact path='/termsrules' component={TermsRules} />
                    <Route exact path='/houserules' component={HouseRules} />
                    <Route exact path='/password' component={Password} />
                    <Route render={() => <h1>ERROR NOT FOUND</h1>} />
                  </Switch>
            
                </div>
        );
     
}

export default Navbar;