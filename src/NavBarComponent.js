import React, {Component} from "react";
import profile_logo from "./assets/profilelogo.png";
import {Route, Switch, NavLink} from "react-router-dom";
import Form from './FormComponent';
import FirstPage from './FirstPage';

class NavBar extends Component {


    render(){
        return(
          
                <div className="App">
                  <NavLink exact activeClassName="active-link" to="/form"> Sign Up </NavLink>
                  <NavLink exact activeClassName="active-link" to="/"> Main Page </NavLink>
                  
            
                  <Switch>
                    <Route exact path='/form' component={Form} />
                    <Route exact path='/' component={FirstPage} />
                    <Route render={() => <h1>ERROR NOT FOUND</h1>} />
                  </Switch>
            
                </div>
        );


    }
}

export default NavBar;