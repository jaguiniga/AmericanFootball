import React from 'react';
import './Button.css';
import {Route, Switch, NavLink} from "react-router-dom";

export function Button (){
    return(
        <NavLink to='sign-up'>
            <button className='btn'> Sign Up</button>
        </NavLink>
    );
}
export default Button;