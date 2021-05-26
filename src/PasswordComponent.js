
import Footer from './FooterComponent';
import './Footer.css';
import React, { useState, useContext } from "react";
import { auth } from "./Firebase/firebase";
import {NavLink} from "react-router-dom";
import NavBar from "./components/Navbar/NavBarComponent";
import epic from "./images/epic.jpg";
import './App.css';

import resetpass from "./images/resetpass.jpg";



const Password = () => {

  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <div style = {{backgroundImage: `url(${resetpass})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <NavBar />
    <section>
      <div className="password"> 
        <form className="formPassword">
          {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
           <h4>PJ'S American Football Password Recovery</h4>
            <div className= "input-btn">
              <label htmlFor="userEmail"> Email: </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Input your email"
                onChange={onChangeHandler}
              />
            </div>
          <button className="input-btn"
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
          <NavLink to="/">
            back to sign in page
          </NavLink>
        </form>

       
      </div>
    
      <div>
      <Footer/>
      </div>
    </section>
  </div>
  );
};

export default Password;