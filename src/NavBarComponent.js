import React, {Component} from "react";
import profile_logo from "./assets/profilelogo.png";
import {Route, Switch, NavLink} from "react-router-dom";
import Form from './FormComponent';
import FirstPage from './FirstPage';
import About from './AboutComponent';
import Privacy from './PrivacyComponent';
import Help from './HelpComponent';
import TermsRules from './TermsRulesComponent';
import HouseRules from "./HouseRulesComponent";
import Password from "./PasswordComponent";

class NavBar extends Component {


    render(){
        return(
          
                <div className="App">
                  <NavLink exact activeClassName="active-link" to="/form"> Sign Up </NavLink>
                  <NavLink exact activeClassName="active-link" to="/"> Main Page </NavLink>
                  
            
                  <Switch>
                    <Route exact path='/form' component={Form} />
                    <Route exact path='/' component={FirstPage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/privacy' component={Privacy} />
                    <Route exact path='/help' component={Help} />
                    <Route exact path='/termsrules' component={TermsRules} />
                    <Route exact path="/houserules" component={HouseRules} />
                    <Route exact path="/password" component={Password} />
                    <Route render={() => <h1>ERROR NOT FOUND</h1>} />
                  </Switch>
            
                </div>
        );


    }
}

export default NavBar;