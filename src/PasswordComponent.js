import React from "react";
import Footer from './FooterComponent';
import './Footer.css'
import Logo from './images/s.png';



const Password = () => {
  return (
    <div className='pages'>
    <section >
      <div className="password"> 
        <h1 >PJ'S American Football Password Recovery</h1>
        <img src = {Logo}  alt =""/>
        <p>This will be how you recover your login and password.
        Trying to figure out how this is done!!!!
        </p>
    </div>
      <div >
      <Footer/>
      </div>
    </section>
    </div>
  );
};

export default Password;