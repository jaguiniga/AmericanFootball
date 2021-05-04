import React from "react";
import Footer from './FooterComponent';
import './Footer.css'
import { NavLink} from "react-router-dom";
import Logo from './images/s.png';
const Help= () => {
  return (
    <div className='pages'>
    <section >
      <h1>HELP CENTER</h1>
      <h2>Last Modified 04/14/2021</h2>
      <img src = {Logo}  alt =""/>
      <p>What do you need help with?</p>
      

      <p>General</p>
      
      <p><NavLink exact activeClassName="active-link" to="/termsrules"> 1. Terms of Service - Conditions; Conduct; Liability; Trademarks and more. 
      </NavLink>
      </p>
      <p><NavLink exact activeClassName="active-link" to="/houserules">   2. House Rules - Rules regarding personal conduct while using this site.
      </NavLink>
      </p>
      <p><NavLink exact activeClassName="active-link" to="/privacy">   3. Privacy Policy - Cookies; Personal Information; Kids and more.
      </NavLink>
      </p>


      <p><strong><NavLink exact activeClassName="active-link" to="/password">   Recovering Log In Info and Password on PJ'S.com
      </NavLink></strong>
      </p>

      <p></p>
       

      <div >
      <Footer/>
      </div>
    </section>
    </div>
  );
};

export default Help;