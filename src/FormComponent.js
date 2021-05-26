import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import catchingfootball from "./images/catchingfootball.jpg";
import Footer from './FooterComponent';
import { auth, generateUserDocument, firestore} from "./Firebase/firebase";
import {NavLink} from "react-router-dom";
import NavBar from "./components/Navbar/NavBarComponent";


function Form () {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState('');
    // const [team, SetTeam] = useState("")
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);

    let file = {};

    function chooseFile(e){
      file = e.target.file[0];
    }
    
    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          generateUserDocument(user, {displayName}, {photoURL});
          firestore.collection("users" + auth.user.id).add(file)
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
        setPhotoURL(null)
      };
    

      const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
    
        if (name === "userEmail") {
          setEmail(value);
        } else if (name === "userPassword") {
          setPassword(value);
        } else if (name === "displayName") {
          setDisplayName(value);
        } else if (name === "photoURL") {
          setPhotoURL(value);
        }
      };

        return (
            <div>
              <NavBar />
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
                  {/*   <div className= "input-btn">
                        <label htmlFor='photoURL'>Upload Image</label>
                    <div className= "input-btn">
                        <label htmlFor='userTeam'>Team</label>
                        <input
                            type='file'
                            name='photoURL'
                            placeholder='image'
                            value={photoURL}
                            id="photoURL"
                            onChange={e => chooseFile(e)}
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
