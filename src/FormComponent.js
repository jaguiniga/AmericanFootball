import React, { useState, useEffect, Fragment, useContext } from 'react';
import './App.css';
import catchingfootball from "./images/catchingfootball.jpg";
import Footer from './FooterComponent';
import { auth, signInWithGoogle, generateUserDocument } from "./Firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "./auth/UserProvider";
import {NavLink} from "react-router-dom";


function Form () {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState('');
    // const [team, SetTeam] = useState("")
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          generateUserDocument(user, {displayName});
        }
        catch(error){
          setError('Error Signing up with email and password');
        }
        alert("You just signed up");
        //SetTeam("");
        setError(null);
        setEmail("");
        setPassword("");
        setDisplayName("");
      };
    

      const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
    
        if (name === "userEmail") {
          setEmail(value);
        } else if (name === "userPassword") {
          setPassword(value);
        } else if (name === "displayName") {
          setDisplayName(value);
        }
      };

        return (
            <div>
            <div style = {{backgroundImage: `url(${catchingfootball})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <div>
            {error !== null && (
                <div>
                    {error}
                </div>
            )}
                <form  className= "form">
                <h1>Sign Up Form</h1>
                    <div className= "input-btn">
                    <label htmlFor='displayName'>UserName </label>
                        <input
                            type='text'
                            name='displayName'
                            placeholder='username'
                            value={displayName}
                            id="displayName"
                            onChange={event => onChangeHandler(event)}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='userEmail'>Email</label>
                        <input
                            type='email'
                            name='userEmail'
                            placeholder='email'
                            value={email}
                            id="userEmail"
                            onChange={event => onChangeHandler(event)}
                    />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='userPassword'>Password</label>
                        <input
                            type='password'
                            name='userPassword'
                            placeholder='password'
                            value={password}
                            id="userPassword"
                            onChange={event => onChangeHandler(event)}
                        />
                    </div>
                    {/* <div className= "input-btn">
                        <label htmlFor='userTeam'>Team</label>
                        <input
                            type='text'
                            name='team'
                            placeholder='team'
                            value={team}
                            id="userTeam"
                            onChange={event => onChangeHandler(event)}
                        />
                    </div> */}
                    <button 
                        onClick={event => {createUserWithEmailAndPasswordHandler(event, email, password);
                    }} 
                        className= "input-btn">Create Account</button>

              <div>
                <p>Already Registered ?</p> <NavLink to="/">Login</NavLink>
              </div>
            </form>

            <div>
              <Footer />
            </div>
          </div>
        </div>
        </div>
        );
    
};
export default Form;
