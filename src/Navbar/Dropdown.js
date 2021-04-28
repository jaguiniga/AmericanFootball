import React, { useState } from "react";
import { MenuItems } from "./MenuItem"
import {Route, Switch, NavLink} from "react-router-dom";

import { Button } from './Button';
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    return ( 
        <>
         <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
         </ul>   
        </>
        );
}
  

export default Dropdown;