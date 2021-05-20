
import Footer from './FooterComponent';
import './Footer.css';
import Logo from './images/s.png';
import React, { useState, useContext } from "react";
import { auth } from "./Firebase/firebase";
import { UserContext } from "./auth/UserProvider";
import {NavLink} from "react-router-dom";




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
    <div className='pages'>
    <section>
      <div className="password"> 

          <h1 >PJ'S American Football Password Recovery</h1>
          <img src = {Logo}  alt =""/>
        <form action="">
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
            <div className= "input-btn">
              <label htmlFor="userEmail"> Email:</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Input your email"
                onChange={onChangeHandler}
              />
            </div>
          <button
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
        </form>

        <NavLink to="/">
         back to sign in page
        </NavLink>
      </div>
    
      <div>
      <Footer/>
      </div>
    </section>
  </div>
  );
};

export default Password;