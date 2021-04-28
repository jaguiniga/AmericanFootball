import React, {Component, useState} from "react";

import {Route, Switch, NavLink} from "react-router-dom";
import Form from '../FormComponent';
import FirstPage from '../FirstPage';
import About from '../AboutComponent';
import Privacy from '../PrivacyComponent';
import Help from '../HelpComponent';
import TermsRules from '../TermsRulesComponent'

import { Button } from './Button';
import Dropdown from "./MenuItem";
import './NavBar.css';



class NavBar extends Component {
  state =  {clicked:false}

  DROPDOWN = [dropdown, setDropdown] = useState(false);

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  closeMobileMenu = () => {
    this.setState(false)
  }


    render(){
        return(    
                <div>         
                  <>
                    <nav className = 'navbar'>
                      <NavLink exact activeClassName="active-link" to="/" className = 'navbar-logo'>
                        American Football
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
                            className='nav-links'
                            to='/services'
                            onClick={this.closeMobileMenu}
                          >
                            Services <i className='fas fa-caret-down'/>
                          </NavLink>
                          {DROPDOWN && <Dropdown/>}
                        </li>

                        <li className = 'nav-item'>
                          <NavLink exact
                            className='nav-links-mobile'
                            to='/sign-up'
                            onClick={this.closeMobileMenu}
                          >
                            Sign Up <i className='fas fa-caret-down'/>
                          </NavLink>
                          {DROPDOWN && <Dropdown/>}
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
                    <Route render={() => <h1>ERROR NOT FOUND</h1>} />
                  </Switch>
            
                </div>
        );
     }
}

export default NavBar;